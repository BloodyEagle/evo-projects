import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ErrorComponent} from "./components/error/error.component";
import {PostsListComponent} from "./components/posts-list/posts-list.component";
import {PostDetailComponent} from "./components/posts-list/post-detail/post-detail.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {PostEditComponent} from "./components/posts-list/post-detail/post-edit/post-edit.component";
import {postEditGuard} from "./post-edit.guard";

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: 'posts',
    component: PostsListComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailComponent,
    canActivateChild: [postEditGuard],
    children: [
      {
        path: 'edit',
        component: PostEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
