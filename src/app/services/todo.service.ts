import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "../interfaces/todo";
import {Observable} from "rxjs";
import {CustomHttpParams} from "../classes/custom-http-params";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {
  }

  public getTodos(counter: number): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos',
      {
        observe: 'body',
        responseType: 'json',
        params: new CustomHttpParams(counter)
      });
  }

}
