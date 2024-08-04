import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {AuthUserAfterLogin} from "../../interfaces/users/auth-user-after-login";
import {Roles} from "../../interfaces/users/Roles";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{
  public activeRoute: string = this.router.snapshot.url.toString();

  constructor(public userService: UserService, private router: ActivatedRoute) {

  }

  public getUser(): AuthUserAfterLogin | undefined {
    console.log('user in nav->', this.userService.authenticatedUser)
    return this.userService.authenticatedUser;
  }

  get isAuthorized(): boolean {
    return this.userService.isAuthorized;
  }

  get user(): AuthUserAfterLogin | undefined {
    return this.userService.authenticatedUser;
  }

  ngOnInit() {

  }

  protected readonly Roles = Roles;
}
