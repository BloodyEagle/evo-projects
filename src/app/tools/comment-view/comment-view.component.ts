import {Component, Input} from '@angular/core';
import {TzComments} from "../../interfaces/comments/tz-comments";

@Component({
  selector: 'app-comment-view',
  templateUrl: './comment-view.component.html',
  styleUrls: ['./comment-view.component.css']
})
export class CommentViewComponent {
  @Input() comments!: TzComments[];
}
