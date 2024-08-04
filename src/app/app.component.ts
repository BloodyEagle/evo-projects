import {Component, OnInit} from '@angular/core';


import {BrowserStorageService} from "./services/browser-storage.service";
import {Store} from "@ngxs/store";
import {AuthState} from "./store/auth-state";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Foodie';

  constructor(public storage: BrowserStorageService, private store: Store) {
    //storage.remove('notify');
  }

  ngOnInit(): void {
    console.log('Token from state ', this.store.selectSnapshot(AuthState.getToken));
    /*this.store.dispatch(new LikesUpdate({id: '1', liked: true}));*/

  }
}
