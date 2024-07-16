import {Component, OnInit} from '@angular/core';
import {ResponseService} from "./response.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public response: ResponseService) {
  }

  ngOnInit() {
    console.log('data => ', this.response.data);
  }
}
