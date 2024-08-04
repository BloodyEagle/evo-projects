import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input() likedIcon: string = 'assets/img/liked.svg';
  @Input() unlikeIcon: string = 'assets/img/unliked.svg';
  @Input() liked: boolean = false;
  @Input() id: string = '';
  @Output() likedChange = new EventEmitter<string>();

  toggleLike() {
    this.liked = !this.liked;
    this.likedChange.emit(this.id);
  }
}
