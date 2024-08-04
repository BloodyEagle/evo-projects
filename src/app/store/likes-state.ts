import {Injectable} from "@angular/core";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {LikesUpdate} from "../interfaces/likes-interface";


@State<string[]>(
  {
    name: 'Likes',
    defaults: []
  }
)

@Injectable()
export class LikesState {
  @Selector()
  static getLikes(state: LikesState):LikesState {
    return state;
  }

  @Action(LikesUpdate)
  updateLikesModel(ctx: StateContext<string[]>, action: LikesUpdate) {
    console.log('updateLikesModel *********** ',ctx, action);
    let state = ctx.getState();
    console.log('state = ', state);
    if (state.find(like => like === action.id)) {
      state = state.filter(like => like !== action.id);
    }
    ctx.setState([...state, action.id]);
  }

}
