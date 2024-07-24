import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  public counter: number = 1;

  @Output() public counterEmitter = new EventEmitter<number>()

  public plus(): void {
    this.counter++;
    this.counterEmitter.emit(this.counter);
    console.log('counter => ', this.counter);
  }

  public minus(): void {
    this.counter--;
    if (this.counter < 1) {
      this.counter = 1;
    }
    this.counterEmitter.emit(this.counter);
    console.log('counter => ', this.counter);
  }

  OnInit() {
    this.counterEmitter.emit(this.counter);
    console.log('counter => ', this.counter);
  }
}
