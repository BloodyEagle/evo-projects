import {Component, Input} from '@angular/core';
import {GetAllPosts} from "../../interfaces/recipes/get-all-posts";
import {LikesUpdate} from "../../interfaces/likes-interface";
import {LikeService} from "../../services/like.service";

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent {

  constructor(public likeService: LikeService) {
  }

  @Input() recipe: GetAllPosts = {
    id: '',
    body: '',
    title: '',
    tags: [],
    image: '',
    timeCooking: 0,
    author: {
      id: '',
      avatar: '',
      firstName: '',
      lastName: '',
      middleName: ''
    },
    createdOn: '',
    updatedOn: ''
  };


  protected readonly console = console;
  protected readonly LikesUpdate = LikesUpdate;
}
