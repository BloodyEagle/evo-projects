import {Injectable} from "@angular/core";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {FavoritesUpdate} from "../interfaces/favorites-interface";

@State<string[]>(
  {
    name: 'Favorites',
    defaults: []
  }
)

@Injectable()
export class FavoritesState {
  @Selector()
  static getFavorites(state: FavoritesState):FavoritesState {
    return state;
  }

  @Action(FavoritesUpdate)
  updateLikesModel(ctx: StateContext<string[]>, action: FavoritesUpdate) {
    console.log('updateFavoritesModel *********** ',ctx, action);
    let state = ctx.getState();
    console.log('state = ', state);
    if (state.find(fav => fav === action.id)) {
      state = state.filter(fav => fav !== action.id);
    }
    ctx.setState([...state, action.id]);
  }

}
