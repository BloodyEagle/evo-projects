import {ResolveFn} from '@angular/router';
import {inject} from "@angular/core";
import {RecipesService} from "./recipes.service";
import {GetAllPosts} from "../interfaces/recipes/get-all-posts";

export const recipesResolver: ResolveFn<GetAllPosts[]> = (route, state) => {
  return inject(RecipesService).getAllRecipes();
}

