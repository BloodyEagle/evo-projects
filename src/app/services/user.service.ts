import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RegisterDto} from "../interfaces/users/register-dto";
import {map, Observable} from "rxjs";
import {AuthUserDto} from "../interfaces/users/auth-user-dto";
import {AuthUpdate, AuthUserAfterLogin} from "../interfaces/users/auth-user-after-login";
import {Router} from "@angular/router";
import {GetUsersType} from "../interfaces/users/get-users-type";
import {OmitTypeClass} from "../interfaces/users/omit-type-class";
import {Store} from "@ngxs/store";
import {AuthState} from "../store/auth-state";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public urlRegex: RegExp = /^((http|https|ftp|www):\/\/)?([a-zA-Z0-9~!@#$%^&*()_\-=+\\\/?.:;',]*)(\.)([a-zA-Z0-9~!@#$%^&*()_\-=+\\\/?.:;',]+)/g;

  constructor(private http: HttpClient, private router: Router, public store: Store) {
  }

  get jwtToken(): string {
    return this.store.selectSnapshot(AuthState.getToken);
  }

  get authenticatedUser(): AuthUserAfterLogin {
    return this.store.selectSnapshot(AuthState.getAuthObject);
  }

  get isAuthorized(): boolean {
    return this.store.selectSnapshot(AuthState.getToken) !== ''
      && this.store.selectSnapshot(AuthState.getToken) !== null && this.store.selectSnapshot(AuthState.getToken) !== undefined;
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
    this.store.reset(AuthUpdate);
    this.router.navigateByUrl('/');
  }

  public getAllUsers(): Observable<GetUsersType[]> {
    return this.http.get<GetUsersType[]>('https://evo-academy.wckz.dev/api/cooking-blog/users');
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
