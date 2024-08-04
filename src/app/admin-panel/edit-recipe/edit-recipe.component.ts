import {Component, OnInit} from '@angular/core';
import {GetOnePost} from "../../interfaces/recipes/get-one-post";
import {RecipesService} from "../../services/recipes.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit{
  public recipe!: GetOnePost;

  constructor(private recipesService: RecipesService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
    console.log('id=', id);
    this.recipesService.getOneRecipe(id).subscribe({
      next: recipe => {
        this.recipe = recipe;
        console.log('Рецепт: ', this.recipe);
      },
      error: error => {
        console.log(error);
      }
    });
  }
}
