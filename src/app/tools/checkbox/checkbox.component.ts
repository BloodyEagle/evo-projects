import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {
  @Input('checked') _checked: boolean = false;
  @Input() index: number = 0;
  @Output() checkedChange = new EventEmitter<boolean>();

  public get isChecked(): boolean {
    return this._checked;
  }

  public set isChecked(value: boolean) {
    this._checked = value;
  }

  public change(): void {
    this._checked = !this._checked;
    this.checkedChange.emit(this._checked);
  }
}
