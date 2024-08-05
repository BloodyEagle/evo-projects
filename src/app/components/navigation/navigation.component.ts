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
export class NavigationComponent implements OnInit {
  public activeRoute: string = this.router.snapshot.url.toString();
  protected readonly Roles = Roles;

  constructor(public userService: UserService, private router: ActivatedRoute) {
  }

  get isAuthorized(): boolean {
    return this.userService.isAuthorized;
  }

  get user(): AuthUserAfterLogin | undefined {
    return this.userService.authenticatedUser;
  }

  public getUser(): AuthUserAfterLogin | undefined {
    return this.userService.authenticatedUser;
  }

  ngOnInit() {

  }

  collapsed: boolean = true;
}
