import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from '@angular/router';
import {inject} from "@angular/core";
import {PostService} from "./services/post.service";
import {Post} from "./interfaces/post";

export const postsResolver: ResolveFn<Post[]> = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  return inject(PostService).getAllPosts();
};
