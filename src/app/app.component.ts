import {Component, OnInit} from '@angular/core';
import {BrowserStorageService} from "./services/browser-storage.service";
import {Store} from "@ngxs/store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Foodie';

  constructor(public storage: BrowserStorageService, private store: Store) {
    //storage.remove('notify');//Чтобы вернуть нижнюю всплывайку :)
  }

  ngOnInit(): void {
  }
}
