import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Post} from "../../../../interfaces/post";
import {PostService} from "../../../../services/post.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  @ViewChild('postTitle') input_title: ElementRef | undefined;
  @ViewChild('postBody') input_body: ElementRef | undefined;
  public post?: Post;
  public id: number = 0;

  constructor(
    private postService: PostService,
    private router: ActivatedRoute,
    private navRouter: Router,
    private location: Location) {
    console.log('Post Detail. ID = ', router.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    const tmpId = this.router.snapshot.parent?.paramMap.get('id');
    this.id = tmpId ? +tmpId : NaN;
    this.postService.getPost(this.id).subscribe((post: Post) => {
      console.log('Role => ',this.postService.role);
      this.post = post;
      if (!this.post) {
        this.post = {
          id: 0,
          title: 'Ошибка получения поста',
          body: ''
        }
      }
    });
    console.log(this.post);
  }

  goBack(): void {
    this.location.back();
  }

  savePost() {
    if (this.post) {
      this.post.title = this.input_title?.nativeElement.value;
      this.post.body = this.input_body?.nativeElement.value;

      this.postService.updatePost(this.post).subscribe((post: Post) => {
        this.post = post;
        if (!this.post) {
          this.post = {
            id: 0,
            title: 'Ошибка обновления поста',
            body: ''
          }
        }
      });
    }
    this.navRouter.navigate(['/posts', this.post?.id]);
  }
}
