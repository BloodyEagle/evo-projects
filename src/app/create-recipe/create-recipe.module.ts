import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRecipeRoutingModule } from './create-recipe-routing.module';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { OneStepComponent } from './recipe-form/one-step/one-step.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { OneIngredientComponent } from './recipe-form/one-ingredient/one-ingredient.component';


@NgModule({
  declarations: [
    RecipeFormComponent,
    OneStepComponent,
    OneIngredientComponent
  ],
  imports: [
    CommonModule,
    CreateRecipeRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
      RecipeFormComponent
  ]
})
export class CreateRecipeModule { }
