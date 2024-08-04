import {Component, OnInit} from '@angular/core';
import {RecipesService} from "../../services/recipes.service";
import {GetOnePost} from "../../interfaces/recipes/get-one-post";
import { ToastrService } from 'ngx-toastr';
import {ActivatedRoute, Router} from "@angular/router";
import {GetAllPosts} from "../../interfaces/recipes/get-all-posts";
import {Author} from "../../interfaces/users/author";
import {Title, Meta} from "@angular/platform-browser";
import {UserService} from "../../services/user.service";
import {Subscription} from "rxjs";
import {ButtonIconTextComponent} from "../../tools/button-icon-text/button-icon-text.component";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{
  private id: string = '';
  private sub!: Subscription;
  public recipe: GetOnePost = {} as GetOnePost;
  public ourcomment: string = '';
  public shareButton = new ButtonIconTextComponent();

  constructor(public recipesService: RecipesService,
              private notifier: ToastrService,
              private activatedRoute: ActivatedRoute,
              private title: Title,
              private meta: Meta,
              public userService: UserService) {

  }

  public getOneRecipe(id: string): void {
    this.recipesService.getOneRecipe(id).subscribe({
      next: recipe => {
        console.log('Полный рецепт = >',recipe);
        this.recipe = recipe;
        this.notifier.success('Полный рецепт получен');
        this.title.setTitle(this.recipe.title)
        this.meta.addTags([{name: 'og:type', content: 'website'},
          {name: 'og:title', content: this.recipe.title},
          {name: 'og:description', content: this.recipe.body},
          {name: 'og:image', content: this.recipe.image}]);
        this.meta.addTag({name: 'description', content: this.recipe.body});
        if (this.recipesService.allRecipes.length === 0) {
          this.recipesService.getAllRecipes().subscribe({
            next: recipes => {
              this.recipesService.allRecipes = recipes;
              this.recipesService.fillAllRandom();
            },
            error: error => {
              console.log('error ->', error);
              this.notifier.error('Ошибка получения рецептов: ' + error.error.message);
            }
          });
        }
      },
      error: error => {
        console.log('error ->', error);
        this.notifier.error('Ошибка получения рецепта: ' + error.error.message);
      }
    });
  }

  public addComment(id: string, comment: string): void {
    this.recipesService.addCommentToRecipe(id, comment).subscribe({
      next: comment => {
        this.recipe = comment;
        console.log('коммент:', comment);
        this.notifier.success('Комментарий добавлен');
        this.ourcomment = '';
        this.getOneRecipe(this.activatedRoute.snapshot.params['id']);
        /*comment.author = this.userService.authenticatedUser as Author;
        this.recipe.comments.push(comment);
        console.log('исправленные комментарии: ', this.recipe.comments);*/
      },
      error: error => {
        console.log('error ->', error);
        this.notifier.error('Ошибка добавления комментария: ' + error.error.message);
      }
    })
  }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.getOneRecipe(this.id);
    });

    this.title.setTitle(this.recipe.title)
    /*this.meta.addTags([{name: 'og:type', content: 'website'},
      {name: 'og:title', content: this.recipe.title},
      {name: 'og:description', content: this.recipe.body},
      {name: 'og:image', content: this.recipe.image}]);
    this.meta.addTag({name: 'description', content: this.recipe.body});
*/

  }

  protected readonly Component = Component;
}
