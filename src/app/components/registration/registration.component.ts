import {Component} from '@angular/core';
import {RegisterDto} from "../../interfaces/users/register-dto";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  public new_user: RegisterDto = {username: '', password: '', firstName: '', lastName: '', middleName: ''};

  constructor(private userService: UserService, private router: Router, private notifier: ToastrService) {

  }

  registerUser(user: RegisterDto) {
    this.userService.registerUser(user).subscribe(
      {
        next: (response: RegisterDto): void => {
          this.new_user = response;
          this.notifier.success('Пользователь ' + this.new_user.username + ' успешно зарегистрирован');
          setTimeout(() => {
            this.router.navigateByUrl('/');
          }, 3000);
        },
        error: (err) => {
          this.notifier.error(err.error.message, 'Ошибка регистрации');
        },
        complete: () => {
        }
      }
    );
  }

}
