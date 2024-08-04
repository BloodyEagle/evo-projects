import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserService} from "../services/user.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //console.log('User interceptor => ', request );
    request = request.clone({
      headers: this.userService.jwtToken !== '' ? new HttpHeaders().set('Authorization', 'Bearer ' + this.userService.jwtToken) : request.headers
    });
    //console.log('Auth interceptor after modify => ', request.headers);
    return next.handle(request);
  }

}
