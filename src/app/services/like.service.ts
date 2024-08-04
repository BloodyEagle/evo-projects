import {Injectable} from '@angular/core';
import {Store} from "@ngxs/store";
import {LikesUpdate} from "../interfaces/likes-interface";
import {LikesState} from "../store/likes-state";

@Injectable({
  providedIn: 'root'
})
export class LikeService {
  public likes: any = this.getLikes();

  constructor(private store: Store) {
  }

  public likeRecipe($event: string) {
    this.store.dispatch(new LikesUpdate($event));
  }

  public getLikes() {
    return this.store.selectSnapshot(LikesState.getLikes);
  }

  public getRecipeLike(id: string) {
    let likes: any = this.store.selectSnapshot(LikesState.getLikes);
    return (likes as string[]).includes(id);
  }

}
