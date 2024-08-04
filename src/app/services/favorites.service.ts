import { Injectable } from '@angular/core';
import {Store} from "@ngxs/store";
import {FavoritesUpdate} from "../interfaces/favorites-interface";
import {FavoritesState} from "../store/favorites-state";

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  constructor(private store: Store) { }

  public favorites: any = this.getFavorites();

  public intoFavorites($event: string) {
    this.store.dispatch(new FavoritesUpdate($event));
    console.log('Liked: ',$event);
  }

  public getFavorites() {
    return this.store.selectSnapshot(FavoritesState.getFavorites);
  }

  public getRecipeFav(id: string) {
    let fav:any = this.store.selectSnapshot(FavoritesState.getFavorites);
    return (fav as string[]).includes(id);
  }

}
