import { Component } from '@angular/core';
import {User} from "./interfaces/user";
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public show$: any = [];

  constructor(private userService: UserService) {}


  public getAllPosts(){
    this.userService.getUsers().subscribe(
      (response: User[]):void => {
        console.log('User list => ', response);
        this.show$ = response;
      }
    );
  }
}
