import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-cooking-time',
  templateUrl: './cooking-time.component.html',
  styleUrls: ['./cooking-time.component.css']
})
export class CookingTimeComponent {
  @Input() timeCooking: number | null = 0;
  @Input() showTitle: boolean = false;
}
