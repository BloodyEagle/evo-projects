import {Component, OnInit} from '@angular/core';
import {RecipesService} from "../../services/recipes.service";
import { ToastrService } from 'ngx-toastr';
import {Router} from "@angular/router";
import {GetAllPosts} from "../../interfaces/recipes/get-all-posts";
import {Meta, Title} from "@angular/platform-browser";
import {PTools} from "../../classes/ptools";


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  public recipes: GetAllPosts[] = [];
  public randomRecipes: number[] =[];

    constructor(
      public recipesService: RecipesService,
      private notifier: ToastrService,
      private router: Router,
      private title: Title,
      private meta: Meta) {
    }

  /*getAllRecipes(): void {
      this.recipesService.getAllRecipes().pipe(
        map(recipes => {
            return recipes.map(recipe => {
                recipe.image = recipe.image.match(this.recipesService.urlRegex) ? recipe.image : '/assets/img/placeholder.jpg';
                return recipe;
            });
        })
      ).subscribe({
          next: recipes => {
              this._allRecipes = recipes;
              this.notifier.success('Все рецепты получены');
              console.log(this._allRecipes);
          },
          error: error => {
              console.log(error);
              this.notifier.failure('Ошибка получения рецептов: ' + error.error.message);
          }
      });
  }*/

  public loadAllRecipes(): void {
    this.recipesService.getAllRecipes().subscribe({
      next: recipes => {
        this.recipes = recipes;
        this.recipesService.allRecipes = recipes;
        this.notifier.success('Все рецепты получены');
        console.log('Все рецепты',this.recipes);
        this.recipesService.fillAllRandom();
      },
      error: error => {
        console.log(error);
        this.notifier.error('Ошибка получения рецептов: ' + error.error.message);
      }
    });
  }
  ngOnInit(): void {
    this.loadAllRecipes()
    this.title.setTitle('Foodie: Каталог рецептовя')
    this.meta.addTags([{name: 'og:type', content: 'website'},
      {name: 'og:title', content: 'Foodie: Каталог рецептов'},
      {name: 'og:description', content: 'Все самые лучшие рецепты собраны здесь'}])
    this.meta.addTag({name: 'description', content: 'Все самые лучшие рецепты собраны здесь'})
  }


}
