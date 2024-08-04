import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {RecipesListComponent} from "./components/recipes-list/recipes-list.component";
import {ErrorComponent} from "./components/error/error.component";
import {MainPageComponent} from "./components/main-page/main-page.component";
import {AuthorizationComponent} from "./components/authorization/authorization.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {RecipeDetailComponent} from "./components/recipe-detail/recipe-detail.component";
import {AdminPageComponent} from "./admin-panel/admin-page/admin-page.component";
import {UsersListComponent} from "./admin-panel/users-list/users-list.component";
import {RecipesManagerComponent} from "./admin-panel/recipes-manager/recipes-manager.component";
import {AccessDeniedComponent} from "./components/access-denied/access-denied.component";
import {AdminGuard} from "./guards/admin-guard.service";
import {AuthenticatedGuard} from "./guards/authenticated.guard";

const routes: Routes = [

  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'recipes',
    component: RecipesListComponent},

  {
    path: 'recipes/:id',
    component: RecipeDetailComponent
  },
  {
    path: 'authorization',
    component: AuthorizationComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin-panel/admin-panel.module').then(m => m.AdminPanelModule),
    canActivate: [AdminGuard],
    canActivateChild: [AdminGuard]
  },
  {
    path: 'create-recipe',
    loadChildren: () => import('./create-recipe/create-recipe.module').then(m => m.CreateRecipeModule),
    canActivate: [AuthenticatedGuard],
    canActivateChild: [AuthenticatedGuard]
  },
  {
    path: 'access-denied',
    component: AccessDeniedComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
