import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button-icon-text',
  templateUrl: './button-icon-text.component.html',
  styleUrls: ['./button-icon-text.component.css']
})
export class ButtonIconTextComponent {
  @Input() title: string = '';
  @Input() img: string = '';
  @Input() check: boolean = false;
  @Input() checkImg: string = '';
  @Output() checkChange = new EventEmitter<void>();

  toggleCheck() {
    this.check = !this.check;
    this.checkChange.emit();
  }
}
