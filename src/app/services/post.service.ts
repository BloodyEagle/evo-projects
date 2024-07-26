import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../interfaces/post";
import {Observable} from "rxjs";

export const Roles = {
  ADMIN: 'admin',
  USER: 'user'
};

@Injectable({
  providedIn: 'root'
})
export class PostService {
  public role = Roles.USER;

  setRole(role: string) {
    this.role = role;
  }

  constructor(private http: HttpClient) { }

  public getAllPostsErr(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts', { observe: 'body', responseType: 'json' });
  }

  public getPost(id: number): Observable<Post> {
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/' + id , { observe: 'body', responseType: 'json' });
  }

  public updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>('https://jsonplaceholder.typicode.com/posts/' + post.id, post, { observe: 'body', responseType: 'json' });
  }
  public createPost(post: Post): Observable<Post> {
    return this.http.post<Post>('https://jsonplaceholder.typicode.com/posts', post, { observe: 'body', responseType: 'json' });
  }

  public deletePost(postId: number) {
    return this.http.delete<Post>('https://jsonplaceholder.typicode.com/posts/' + postId);
  }
}
