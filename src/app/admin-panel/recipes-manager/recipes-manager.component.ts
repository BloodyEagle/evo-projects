import {Component, OnInit} from '@angular/core';
import {RecipesService} from "../../services/recipes.service";
import {GetAllPosts} from "../../interfaces/recipes/get-all-posts";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-recipes-manager',
  templateUrl: './recipes-manager.component.html',
  styleUrls: ['./recipes-manager.component.css']
})
export class RecipesManagerComponent implements OnInit {
  public recipes: GetAllPosts[] = [];

  constructor(public recipesService: RecipesService, private notifier: ToastrService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe({
      next: ({recipes}) => {
        this.recipes = recipes;
      },
      error: error => {
        this.notifier.error(error.error.message, 'Ошибка получения рецептов');
      }
    });
  }

  public deleteRecipe(id: string): void {
    this.recipesService.deleteRecipe(id).subscribe({
      next: (response) => {
        this.recipes = this.recipes.filter(recipe => recipe.id !== id);
      },
      error: (err) => {
        this.notifier.error(err.error.message, 'Ошибка удаления рецепта');
      },
      complete: () => {
      }
    });
  }

}
