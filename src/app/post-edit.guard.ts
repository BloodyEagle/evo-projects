import {ActivatedRouteSnapshot, CanActivateChildFn, Router, RouterStateSnapshot} from '@angular/router';
import {inject} from "@angular/core";
import {PostService, Roles} from "./services/post.service";

export const postEditGuard: CanActivateChildFn = (childRoute:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  //let nav = inject(Router).navigateByUrl('/error')
  //console.log('nav=',nav.catch((error) => error));
  return inject(PostService).role === Roles.ADMIN
    ? true
    : inject(Router).parseUrl('/error');
};
