import {Component, Input} from '@angular/core';
import {GetAllPosts} from "../../interfaces/recipes/get-all-posts";

@Component({
  selector: 'app-may-be-like',
  templateUrl: './may-be-like.component.html',
  styleUrls: ['./may-be-like.component.css']
})
export class MayBeLikeComponent {
  @Input() recipes: GetAllPosts[] = [];
  @Input() from!: number[];
}
