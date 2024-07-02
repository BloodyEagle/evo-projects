import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  array_cats = [
    {name: 'Tom', birthday: new Date("2017-01-26")},
    {name: 'Jerry', birthday: new Date("2011-05-20")},
    {name: 'Spike', birthday: new Date("2007-08-01")},
    {name: 'Sandy', birthday: new Date("2022-012-10")}
  ]

  switch_string = 'Jerry';


  protected readonly Date = Date;
  protected readonly Number = Number;
}
