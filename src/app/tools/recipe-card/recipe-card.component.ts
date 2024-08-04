import {Component, Input} from '@angular/core';
import {GetAllPosts} from "../../interfaces/recipes/get-all-posts";
import {Author} from "../../interfaces/users/author";

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent {
  //recipe: GetAllPosts!;

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

  likeRecipe($event: { liked: boolean; id: string }) {
    console.log('Liked: ',$event.liked, $event.id);
  }
}
