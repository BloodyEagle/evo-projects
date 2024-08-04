import {ResolveFn} from '@angular/router';
import {inject} from "@angular/core";
import {RecipesService} from "./recipes.service";
import {GetOnePost} from "../interfaces/recipes/get-one-post";

export const oneRecipeResolver: ResolveFn<GetOnePost> = (route, state) => {
  let id = route.paramMap.get('id') || '';
  inject(RecipesService).fillAllRandom();
  return inject(RecipesService).getOneRecipe(id);
}
