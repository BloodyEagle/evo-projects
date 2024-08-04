import {Component, OnInit} from '@angular/core';
import {RecipesService} from "../../services/recipes.service";
import {GetAllPosts} from "../../interfaces/recipes/get-all-posts";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-recipes-manager',
  templateUrl: './recipes-manager.component.html',
  styleUrls: ['./recipes-manager.component.css']
})
export class RecipesManagerComponent implements OnInit {
  public recipes: GetAllPosts[] = [];
  constructor(public recipesService: RecipesService, private notifier: ToastrService) {
  }

  ngOnInit() {
    this.recipesService.getAllRecipes().subscribe({
      next: recipes => {
        this.recipes = recipes;
        console.log('Рецепты: ', this.recipes);
        this.notifier.success('Все рецепты получены');
      },
      error: error => {
        console.log(error);
        this.notifier.error('Ошибка получения рецептов: ' + error.error.message);
      }
    });
  }

  public deleteRecipe(id: string):void{
    console.log('Del - ',id);
    this.recipesService.deleteRecipe(id).subscribe({
      next: (response) => {
        console.log('Del - ',response);
        this.recipes = this.recipes.filter(recipe => recipe.id !== id);
      },
      error: (err) => {
        console.log(err);
        this.notifier.error('Ошибка удаления рецепта: ' + err.error.message);
      },
      complete: () => {
      }
    });
  }

}
