import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {postsResolver} from "./posts.resolver";
import {ResovledComponent} from "./resovled/resovled.component";

const routes: Routes = [
  { path: 'resolve',
    component: ResovledComponent,
    resolve: {
        post: postsResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
