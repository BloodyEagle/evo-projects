import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RegisterDto} from "../interfaces/users/register-dto";
import {map, Observable} from "rxjs";
import {AuthUserDto} from "../interfaces/users/auth-user-dto";
import {AuthUserAfterLogin} from "../interfaces/users/auth-user-after-login";
import {Router} from "@angular/router";
import {GetUsersType} from "../interfaces/users/get-users-type";
import {OmitTypeClass} from "../interfaces/users/omit-type-class";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _jwtToken: string = '';
  private _authenticatedUser!: AuthUserAfterLogin;
  public isAuthorized: boolean = false;
  public urlRegex: RegExp = /^((http|https|ftp|www):\/\/)?([a-zA-Z0-9\~\!\@\#\$\%\^\&\*\(\)_\-\=\+\\\/\?\.\:\;\'\,]*)(\.)([a-zA-Z0-9\~\!\@\#\$\%\^\&\*\(\)_\-\=\+\\\/\?\.\:\;\'\,]+)/g;

  constructor(private http: HttpClient, private router: Router) {
  }

  get jwtToken(): string {
    return this._jwtToken;
  }

  set jwtToken(value: string) {
    this._jwtToken = value;
  }

  get authenticatedUser(): AuthUserAfterLogin {
    return this._authenticatedUser;
  }

  set authenticatedUser(value: AuthUserAfterLogin) {
    this._authenticatedUser = value;
  }
  public registerUser(user: RegisterDto): Observable<RegisterDto> {
    return this.http.post<RegisterDto>('https://evo-academy.wckz.dev/api/cooking-blog/users/registration',
      user,
      {observe: 'body', responseType: 'json'});
  }

  public loginUser(user: AuthUserDto, fastJwt: boolean = false): Observable<AuthUserAfterLogin> {
    return this.http.post<AuthUserAfterLogin>('https://evo-academy.wckz.dev/api/cooking-blog/users/sign',
      user,
      {observe: 'body', responseType: 'json', params: {fastJwt: fastJwt}});
  }

  public logoutUser(): void {
    this.jwtToken = '';
    this.authenticatedUser = {} as AuthUserAfterLogin;
    this.isAuthorized = false;
    this.router.navigateByUrl('/');
  }

  public getAllUsers(): Observable<GetUsersType[]> {
    return this.http.get<GetUsersType[]>('https://evo-academy.wckz.dev/api/cooking-blog/users');//, { observe: 'body', responseType: 'json'});
  }

  public getUser(id: string): Observable<OmitTypeClass> {
    return this.http.get<OmitTypeClass>('https://evo-academy.wckz.dev/api/cooking-blog/users/' + id).pipe(
      map(
        user => {
          user.posts.map(
            post => {
              post.image = post.image.match(this.urlRegex) ? post.image : '/assets/img/placeholder.jpg';

            }
          )
          return user;
        }
      )
    );
  }

  public deleteUser(id: string): Observable<any> {
    return this.http.delete<any>('https://evo-academy.wckz.dev/api/cooking-blog/users/' + id);
  }
}
