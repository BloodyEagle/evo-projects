import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-notify-window',
  templateUrl: './notify-window.component.html',
  styleUrls: ['./notify-window.component.css']
})
export class NotifyWindowComponent {
  @Input() title: string = 'Title';
  @Input() text: string = 'Text';
  @Input() icon:  string = 'assets/img/scheck.svg';
  @Output() onClose = new EventEmitter<boolean>();

  public close(): void {
      this.onClose.emit(false);
  }

}
