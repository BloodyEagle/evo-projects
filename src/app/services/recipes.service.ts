import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {GetAllPosts} from "../interfaces/recipes/get-all-posts";
import {map, Observable} from "rxjs";
import {GetOnePost} from "../interfaces/recipes/get-one-post";
import {UpdatePostDto} from "../interfaces/recipes/update-post-dto";
import {CreatePostDto} from "../interfaces/recipes/create-post-dto";
import {PTools} from "../classes/ptools";
import {CreateCommentDto} from "../interfaces/comments/create-comment-dto";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  public urlRegex: RegExp = /^((http|https|ftp|www):\/\/)?([a-zA-Z0-9\~\!\@\#\$\%\^\&\*\(\)_\-\=\+\\\/\?\.\:\;\'\,]*)(\.)([a-zA-Z0-9\~\!\@\#\$\%\^\&\*\(\)_\-\=\+\\\/\?\.\:\;\'\,]+)/g;
  //public resipes$: Observable<GetAllPosts[]> = this.getAllRecipes();
  public allRecipes: GetAllPosts[] = [];
  public randomRecipes: number[] =[];
  public fullRandomRecipes: number[] =[];

  constructor(private http: HttpClient, private router: Router) {}

  getAllRecipes(count: number = NaN): Observable<GetAllPosts[]> {
    return this.http.get<GetAllPosts[]>('https://evo-academy.wckz.dev/api/cooking-blog/posts',
      isNaN(count) ? {} : {params: {filter: count.toString()}}).pipe(
        map(recipes => {
            return recipes.map(recipe => {
                recipe.image = recipe.image.match(this.urlRegex) ? recipe.image : '/assets/img/placeholder.jpg';
                console.log('проверка на корректность URL картинки: ', recipe.image);
                return recipe;
            });
        })
    );
  }

  getOneRecipe(id: string): Observable<GetOnePost> {
    return this.http.get<GetOnePost>(`https://evo-academy.wckz.dev/api/cooking-blog/posts/${id}`).pipe(
      map(recipe => {
        recipe.image = recipe.image.match(this.urlRegex) ? recipe.image : '/assets/img/placeholder.jpg';
        console.log('проверка на корректность URL картинки: ', recipe.image);
        return recipe;
      })
    );
  }

  createRecipe(post: CreatePostDto): Observable<CreatePostDto> {
    return this.http.post<CreatePostDto>('https://evo-academy.wckz.dev/api/cooking-blog/posts/create', post);
  }

  updateRecipe(id: string, post: CreatePostDto): Observable<UpdatePostDto> {
    return this.http.patch<UpdatePostDto>(`https://evo-academy.wckz.dev/api/cooking-blog/posts/${id}`, post);
  }

  deleteRecipe(id: string): Observable<any> {
    return this.http.delete<GetOnePost>(`https://evo-academy.wckz.dev/api/cooking-blog/posts/${id}`);
  }

  addCommentToRecipe(id: string, comment: string): Observable<any> {
    return this.http.post<CreateCommentDto>(`https://evo-academy.wckz.dev/api/cooking-blog/posts/${id}/add-comment`, {text: comment});
  }

  /*fillRandomRecipes(count: number = 3, max: number = 3): void {
    let i:number = 0;
    let recipesCount = this.allRecipes.length-1;
    let rnd: number;
    while (i < count && this.randomRecipes.length <= max) {
      rnd = PTools.getRandomInt(0, recipesCount);
      if (this.randomRecipes.includes(rnd)){
        rnd = PTools.getRandomInt(0, recipesCount);
      } else {
        this.randomRecipes.push(rnd);
        i++;
      }
    }
    console.log('randoms: ',this.randomRecipes);
  }*/

  fillAllRandom(): void {
    this.fullRandomRecipes.length = 0;
    let i:number = 0;
    let recipesCount = this.allRecipes.length-1;
    console.log('всего рецептов: ', recipesCount);
    for (i = 0; i < recipesCount; i++) {
      this.fullRandomRecipes.push(i);
    }
    this.fullRandomRecipes = PTools.shuffleNumber(this.fullRandomRecipes);
    console.log('randoms: ',this.fullRandomRecipes);
  }

}
