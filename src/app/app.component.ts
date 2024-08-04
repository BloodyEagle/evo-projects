import {Component, OnInit} from '@angular/core';

import { NavigationComponent} from "./components/navigation/navigation.component";
import {BrowserStorageService} from "./services/browser-storage.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Foodie';

  constructor(public storage: BrowserStorageService) {
    //storage.remove('notify');
  }

  ngOnInit(): void {

  }
}
