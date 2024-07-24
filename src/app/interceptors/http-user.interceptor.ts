import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomHttpParams} from "../classes/custom-http-params";

@Injectable()
export class HttpUserInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.params instanceof CustomHttpParams) {
      request = request.clone({
        url: request.url + '/' + request.params.counter
      });
    }
    console.log('User interceptor => ', request);
    return next.handle(request);
  }
}
