import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecipeFormComponent} from "./recipe-form/recipe-form.component";


const routes: Routes = [
  {
      path: '',
      component: RecipeFormComponent,
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRecipeRoutingModule { }
