import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminPageComponent} from "./admin-page/admin-page.component";
import {UsersListComponent} from "./users-list/users-list.component";
import {RecipesManagerComponent} from "./recipes-manager/recipes-manager.component";
import {AdminGuard} from "../guards/admin-guard.service";
import {ViewOneUserComponent} from "./view-one-user/view-one-user.component";
import {EditRecipeComponent} from "./edit-recipe/edit-recipe.component";
import {recipesResolver} from "../services/recipes.resolver";
import {oneRecipeResolver} from "../services/one-recipe.resolver";
import {oneUserResolver} from "../services/one-user.resolver";

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    canActivate: [AdminGuard],
    canActivateChild: [AdminGuard],
    children: [
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
      },
      {
        path: 'users',
        component: UsersListComponent,
      },
      {
        path: 'users/:id',
        component: ViewOneUserComponent,
        resolve: {
          user: oneUserResolver
        }
      },
      {
        path: 'recipes',
        component: RecipesManagerComponent,
        resolve: {
          recipes: recipesResolver
        }
      },
      {
       path: 'recipes/:id',
        component: EditRecipeComponent,
        resolve: {
          recipe: oneRecipeResolver
        }
      }
    ]
  },
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
