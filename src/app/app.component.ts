import {Component} from '@angular/core';
import {interval, map, Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  orderIntervalSub$!: Subscription;
  randomIntervalSub$!: Subscription;

  enabledOrderCounter: boolean = false;
  enabledRandomCounter: boolean = false;

  orderArray: number[] = [];
  randomArray: string[] = [];

  constructor() {
  }

  public enableOrderStream() {
    const orderStream = interval(2000);
    this.orderIntervalSub$ = orderStream.subscribe((value) => {
      this.orderArray.push(this.orderArray.length);
    });
    this.enabledOrderCounter = true;
  }

  public enableRandomStream() {
    const randomStream = interval(2000);
    this.randomIntervalSub$ = randomStream.pipe(
      map((value) => `Random Value: ${Math.round(Math.random() * 100)}`)
    )
      .subscribe((value) => {
        this.randomArray.push(value);
      });
    this.enabledRandomCounter = true;
  }

  public disableOrderStream() {
    if (this.orderIntervalSub$) {
      this.orderIntervalSub$.unsubscribe();
    }
    this.enabledOrderCounter = false;
  }

  public disableRandomStream() {
    if (this.randomIntervalSub$) {
      this.randomIntervalSub$.unsubscribe();
    }
    this.enabledRandomCounter = false;
  }
}
