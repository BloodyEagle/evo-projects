import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {GetUsersType} from "../../interfaces/users/get-users-type";
import {ToastrService} from 'ngx-toastr';
import {Roles} from "../../interfaces/users/Roles";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  public users: GetUsersType[] = [];
  protected readonly Roles = Roles;

  constructor(private userService: UserService, private notifier: ToastrService) {
  }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      {
        next: (response: GetUsersType[]) => {
          this.users = response;
        },
        error: (err) => {
          this.notifier.error('Ошибка получения списка пользователей: ' + err.error.message);
        },
        complete: () => {
        }
      }
    );
  }

  public deleteUser(id: string): void {
    this.userService.deleteUser(id).subscribe({
      next: (response) => {
        this.notifier.success('Пользователь удален');
      },
      error: (err) => {
        this.notifier.error(err.error.message, 'Ошибка удаления пользователя');
      },
      complete: () => {
      }
    });
  }
}
