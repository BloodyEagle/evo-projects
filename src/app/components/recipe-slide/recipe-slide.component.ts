import {Component, Input} from '@angular/core';
import {GetAllPosts} from "../../interfaces/recipes/get-all-posts";

@Component({
  selector: 'app-recipe-slide',
  templateUrl: './recipe-slide.component.html',
  styleUrls: ['./recipe-slide.component.css']
})
export class RecipeSlideComponent {
  @Input() recipe: GetAllPosts = {
    id: '',
    title: '',
    body: '',
    tags: [''],
    image: '',
    timeCooking: 0,
    author: {id: '', avatar: '', firstName: '', lastName: '', middleName: ''},
    createdOn: '',
    updatedOn: ''
  };

}
