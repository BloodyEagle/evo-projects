import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../interfaces/post";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  public getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts', { observe: 'body', responseType: 'json' });
  }

  public getPostComments(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>('https://jsonplaceholder.typicode.com/comments', { observe: 'body', responseType: 'json', params: {postId: postId} });
  }

  public createPost(post: Post): Observable<Post> {
    return this.http.post<Post>('https://jsonplaceholder.typicode.com/posts', post, { observe: 'body', responseType: 'json' });
  }

  public getAllPostsHeaders() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts', { observe: 'response', responseType: 'text', headers: {'X-Test': '1'} });
  }

  public deletePost(postId: number) {
    return this.http.delete<Post>('https://jsonplaceholder.typicode.com/posts/' + postId);
  }
}
