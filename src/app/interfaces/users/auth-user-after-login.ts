
export interface AuthUserAfterLogin {
  id: string;
  role: string;
  firstName: string;
  lastName: string;
  middleName: string;
  avatar: string;
  username: string;
  jwtToken: string;
  expiresIn: number;
}

export class AuthUpdate{
  static readonly type = '[Auth] Update';

  constructor(public payload: AuthUserAfterLogin) {}
}
