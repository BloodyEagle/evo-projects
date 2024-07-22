import { Component} from '@angular/core';

import {HttpErrorResponse} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "./services/post.service";
import {Post} from "./interfaces/post";

enum ResponseType {Posts, Comments, Text}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public show$: any = '';
  public responseType?: ResponseType;
  public isError: boolean = false;
  public errMessage: string = '';

  constructor(private route: ActivatedRoute, private postSerice: PostService) {}

  public clearAll(): void {
    this.show$ = '';
    this.isError = false;
    this.errMessage = '';
  }

  public getAllPosts(){
    this.clearAll();
    this.postSerice.getAllPosts().subscribe(
      (response: Post[]):void => {
        this.responseType = ResponseType.Posts;
        this.show$ = response;
        console.log('Posts list => ', this.show$);
      }
    );
  }

  public getAllPostsErr(){
    this.clearAll();
    this.postSerice.getAllPosts().subscribe({
      next: (response: Post[]):void => {
        this.responseType = ResponseType.Posts;
        this.show$ = response;
        console.log('Posts list => ', this.show$);
      },
      error: (err: HttpErrorResponse):void => {
        if (err.status === 404 || err.status === 500 || err.status === 0) {
          this.isError = true;
          this.errMessage = err.message;
          console.log(err.message);
        }
      },
      complete: ():void => {
        console.log('Запрос выполнен');
      }
    });
  }

  public getPostComments(postId: number){
    this.clearAll();
    this.postSerice.getPostComments(postId).subscribe(
      (response: Comment[]):void => {
        this.responseType = ResponseType.Comments;
        this.show$ = response;
        console.log('Comments list => ', this.show$);
      }
    );
  }

  public createPost(post: Post){
    this.clearAll();
    this.postSerice.createPost(post).subscribe(
      (response: Post):void => {
        this.responseType = ResponseType.Posts;
        this.show$ = response;
        console.log('Post created => ', this.show$);
      }
    );
  }

  public getAllPostsHeaders(){
    this.clearAll();
    this.postSerice.getAllPostsHeaders().subscribe(
      (response: any):void => {
        this.responseType = ResponseType.Text;
        this.show$ = response;
        console.log('Posts list => ', this.show$);
      }
    );
  }

  public deletePost(postId: number){
    this.clearAll();
    this.postSerice.deletePost(postId).subscribe(
      (response: Post):void => {
        this.show$ = response;
        console.log('Post deleted => ', this.show$);
      }
    );
  }

  protected readonly ResponseType = ResponseType;
}
