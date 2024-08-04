import {Injectable} from "@angular/core";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {AuthUpdate, AuthUserAfterLogin} from "../interfaces/users/auth-user-after-login";

@State<AuthUserAfterLogin>(
  {
    name: 'AuthState',
    defaults: {
      id: '',
      role: '',
      firstName: '',
      lastName: '',
      middleName: '',
      avatar: '',
      username: '',
      jwtToken: '',
      expiresIn: 0
    }
  }
)

@Injectable()
export class AuthState {

  @Selector()
  static getToken(state: AuthUserAfterLogin) {
    return state.jwtToken;
  }

  @Selector()
  static getAuthObject(state: AuthUserAfterLogin) {
    return state;
  }

  @Action(AuthUpdate)
  updateUserModel(ctx: StateContext<AuthUserAfterLogin>, action: AuthUpdate) {
    ctx.patchState({
      id: action.payload.id,
      role: action.payload.role,
      firstName: action.payload.firstName,
      lastName: action.payload.lastName,
      middleName: action.payload.middleName,
      avatar: action.payload.avatar,
      username: action.payload.username,
      jwtToken: action.payload.jwtToken,
      expiresIn: action.payload.expiresIn
    })
  }
}
