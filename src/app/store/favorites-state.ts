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
  static getFavorites(state: FavoritesState): FavoritesState {
    return state;
  }

  @Action(FavoritesUpdate)
  updateLikesModel(ctx: StateContext<string[]>, action: FavoritesUpdate) {
    let state = ctx.getState();
    if (state.find(fav => fav === action.id)) {
      state = state.filter(fav => fav !== action.id);
      ctx.setState(state);
    } else {
      ctx.setState([...state, action.id]);
    }
  }

}
