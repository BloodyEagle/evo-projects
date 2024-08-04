import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-stat-block',
  templateUrl: './stat-block.component.html',
  styleUrls: ['./stat-block.component.css']
})
export class StatBlockComponent {
  @Input() title: string = '';
  @Input() param: string = '';
}
