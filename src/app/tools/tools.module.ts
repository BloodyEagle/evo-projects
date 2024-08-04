import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthorComponent} from "./author/author.component";
import {ButtonIconTextComponent} from "./button-icon-text/button-icon-text.component";
import {CheckboxComponent} from "./checkbox/checkbox.component";
import {CookingTimeComponent} from "./cooking-time/cooking-time.component";
import {CommentViewComponent} from "./comment-view/comment-view.component";
import {RecipeCardComponent} from "./recipe-card/recipe-card.component";
import {TagsComponent} from "./tags/tags.component";
import {FoodValueComponent} from "./food-value/food-value.component";
import {IngredientsComponent} from "./ingredients/ingredients.component";
import {StepsComponent} from "./steps/steps.component";
import {MayBeLikeComponent} from "./may-be-like/may-be-like.component";
import {OtherRecipeCardComponent} from "./other-recipe-card/other-recipe-card.component";
import {RouterModule} from "@angular/router";
import {ModalWindowConfirmComponent} from "./modal-window-confirm/modal-window-confirm.component";
import {ModalWindowShareComponent} from './modal-window-share/modal-window-share.component';
import {LikeComponent} from './like/like.component';

@NgModule({
  declarations: [
    AuthorComponent,
    ButtonIconTextComponent,
    CheckboxComponent,
    CookingTimeComponent,
    CommentViewComponent,
    RecipeCardComponent,
    TagsComponent,
    FoodValueComponent,
    IngredientsComponent,
    StepsComponent,
    MayBeLikeComponent,
    OtherRecipeCardComponent,
    ModalWindowConfirmComponent,
    ModalWindowShareComponent,
    LikeComponent,
  ],
  exports: [
    AuthorComponent,
    ButtonIconTextComponent,
    CheckboxComponent,
    CookingTimeComponent,
    CommentViewComponent,
    RecipeCardComponent,
    TagsComponent,
    FoodValueComponent,
    IngredientsComponent,
    StepsComponent,
    MayBeLikeComponent,
    OtherRecipeCardComponent,
    ModalWindowConfirmComponent,
    ModalWindowShareComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ToolsModule {
}
