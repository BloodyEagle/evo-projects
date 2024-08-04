import {Component, Input} from '@angular/core';
import {GetUserPostType} from "../../../interfaces/recipes/get-user-post-type";

@Component({
  selector: 'app-recipe-adm-card',
  templateUrl: './recipe-adm-card.component.html',
  styleUrls: ['./recipe-adm-card.component.css']
})
export class RecipeAdmCardComponent {
  @Input() recipe!: GetUserPostType;
}
