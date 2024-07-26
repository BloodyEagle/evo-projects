import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../services/post.service";
import {Post} from "../../interfaces/post";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit{
  public posts!: Post[];

  constructor(private route: ActivatedRoute, private postSerice: PostService) {}

  public getAllPosts(){
    this.postSerice.getAllPostsErr().subscribe({
      next: (response: Post[]):void => {
        this.posts = response;
      },
      error: (err: HttpErrorResponse):void => {
        if (err.status === 404 || err.status === 500 || err.status === 0) {
          console.log('Error =>', err.message);
        }
      },
      complete: ():void => {
        console.log('Запрос выполнен');
      }
    });
  }

  ngOnInit(): void {
    this.getAllPosts();
  }
}
