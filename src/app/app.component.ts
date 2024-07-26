import { Component } from '@angular/core';
import {PostService, Roles} from "./services/post.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private postService: PostService) {
  }

  get role() {
    return this.postService.role;
  }

  public setRole(role: string) {
    this.postService.setRole(role);
  }

  protected readonly Roles = Roles;
}
