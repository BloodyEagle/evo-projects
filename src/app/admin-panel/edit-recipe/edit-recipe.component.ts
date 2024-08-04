import {Component, OnInit} from '@angular/core';
import {GetOnePost} from "../../interfaces/recipes/get-one-post";
import {RecipesService} from "../../services/recipes.service";
import {ActivatedRoute} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  public recipe!: GetOnePost;

  constructor(private recipesService: RecipesService, private activatedRoute: ActivatedRoute, private notifier: ToastrService) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe({
      next: ({recipe}) => {
        this.recipe = recipe;
      },
      error: error => {
        this.notifier.error(error.error.message, 'Ошибка получения рецепта');
      }
    });
  }
}
