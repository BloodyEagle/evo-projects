import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {GetUsersType} from "../../interfaces/users/get-users-type";
import { ToastrService } from 'ngx-toastr';
import {Roles} from "../../interfaces/users/Roles";



@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  public users: GetUsersType[] = [];
  constructor(private userService: UserService, private notifier: ToastrService) {
  }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      {
        next: (response: GetUsersType[]) => {
          this.users = response;
          this.notifier.success(`Получена информация с сервера о ${this.users.length} пользователях`);
          console.log(response);
        },
        error: (err) => {
          console.log(err);
          this.notifier.error('Ошибка получения списка пользователей: ' + err.error.message);
        },
        complete: () => {
        }
      }
    );
  }

  public editUser():void{
    alert(111111111111111111111111111111)
  }

  public deleteUser(id: string):void{
    console.log('Del - ',id);
    this.userService.deleteUser(id).subscribe({
      next: (response) => {
        console.log('Del - ',response);
      },
      error: (err) => {
        console.log(err);
        this.notifier.error('Ошибка удаления пользователя: ' + err.error.message);
      },
      complete: () => {
      }
    });
  }
  protected readonly Roles = Roles;
  protected readonly alert = alert;
}
