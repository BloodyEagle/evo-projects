import {Component} from '@angular/core';
import {AuthUserDto} from "../../interfaces/users/auth-user-dto";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {ToastrService} from 'ngx-toastr';
import {AuthUpdate, AuthUserAfterLogin} from "../../interfaces/users/auth-user-after-login";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent {
  public user: AuthUserDto = {username: '', password: ''};
  public fastJwt: boolean = false;

  constructor(private userService: UserService, private router: Router, private notifier: ToastrService) {
  }

  loginUser(user: AuthUserDto, fastJwt: boolean = false): void {
    this.userService.loginUser(user, fastJwt).subscribe(
      {
        next: (response: AuthUserAfterLogin): void => {
          this.userService.store.dispatch(new AuthUpdate(response));
          this.notifier.success('Пользователь ' + this.userService.authenticatedUser.username + ' успешно авторизован');
          this.router.navigateByUrl('/');
        },
        error: (err) => {
          this.notifier.error(err.error.message, 'Ошибка авторизации');
        },
        complete: () => {
        }
      }
    );
  }

}
