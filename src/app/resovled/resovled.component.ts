import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Post} from "../interfaces/post";

@Component({
  selector: 'app-resovled',
  templateUrl: './resovled.component.html',
  styleUrls: ['./resovled.component.css']
})
export class ResovledComponent {
  public posts: Post[] = [];
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ post }) => {
      this.posts = post;
      console.log('Post resolved => ',post);
    })
  }
}
