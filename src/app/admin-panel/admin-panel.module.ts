import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import {AdminPageComponent} from "./admin-page/admin-page.component";
import {UsersListComponent} from "./users-list/users-list.component";
import {RecipesManagerComponent} from "./recipes-manager/recipes-manager.component";
import {ToolsModule} from "../tools/tools.module";
import { ViewOneUserComponent } from './view-one-user/view-one-user.component';
import { UserAvatarComponent } from './tools/user-avatar/user-avatar.component';
import { StatBlockComponent } from './tools/stat-block/stat-block.component';
import { RecipeAdmCardComponent } from './tools/recipe-adm-card/recipe-adm-card.component';
import { UserParamsTableComponent } from './user-params-table/user-params-table.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import {CreateRecipeModule} from "../create-recipe/create-recipe.module";




@NgModule({
  declarations: [
    AdminPageComponent,
    UsersListComponent,
    RecipesManagerComponent,
    ViewOneUserComponent,
    UserAvatarComponent,
    StatBlockComponent,
    RecipeAdmCardComponent,
    UserParamsTableComponent,
    EditRecipeComponent,


  ],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    ToolsModule,
    CreateRecipeModule,
  ]
})
export class AdminPanelModule { }
