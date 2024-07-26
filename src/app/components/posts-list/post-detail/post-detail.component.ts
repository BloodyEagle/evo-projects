import {Component, OnInit} from '@angular/core';
import {PostService} from "../../../services/post.service";
import {ActivatedRoute} from "@angular/router";
import {Post} from "../../../interfaces/post";
import {Location} from '@angular/common';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  public post?: Post
  public id: number = 0;

  constructor(
      private postService: PostService,
      private router: ActivatedRoute,
      private location: Location) {
    console.log('Post Detail. ID = ', router.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    const tmpId = this.router.snapshot.paramMap.get('id');
    this.id = tmpId ? +tmpId : NaN;
    this.postService.getPost(this.id).subscribe((post: Post) => {
      this.post = post;
      if (!this.post) {
        this.post = {
          id: 0,
          title: 'Ошибка получения поста',
          body: ''
        }
        console.log(this.post);
      }
    });
  }

  goBack(): void {
    this.location.back();
  }
}
