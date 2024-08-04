import {Component, Input} from '@angular/core';
import {GetAllPosts} from "../../interfaces/recipes/get-all-posts";

@Component({
  selector: 'app-other-recipe-card',
  templateUrl: './other-recipe-card.component.html',
  styleUrls: ['./other-recipe-card.component.css']
})
export class OtherRecipeCardComponent {
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
}
