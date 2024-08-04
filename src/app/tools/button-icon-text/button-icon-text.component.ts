import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button-icon-text',
  templateUrl: './button-icon-text.component.html',
  styleUrls: ['./button-icon-text.component.css']
})
export class ButtonIconTextComponent {
  @Input() title: string = '';
  @Input() img: string = '';
}
