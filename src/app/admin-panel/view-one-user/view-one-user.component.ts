import { Component } from '@angular/core';
import {GetUsersType} from "../../interfaces/users/get-users-type";
import {UserService} from "../../services/user.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";
import {OmitTypeClass} from "../../interfaces/users/omit-type-class";

@Component({
  selector: 'app-view-one-user',
  templateUrl: './view-one-user.component.html',
  styleUrls: ['./view-one-user.component.css']
})
export class ViewOneUserComponent {
  public user!: OmitTypeClass;

  constructor(
    private userService: UserService,
    private notifier: ToastrService,
    private router: ActivatedRoute,
    private router2: Router) {
  }

  public deleteUser(id: string):void{
    console.log('Del - ',id);
    this.userService.deleteUser(id).subscribe({
      next: (response) => {
        console.log('Del - ',response);
        this.router2.navigateByUrl('/admin/users');
      },
      error: (err) => {
        console.log(err);
        this.notifier.error('Ошибка удаления пользователя: ' + err.error.message);
      },
      complete: () => {
      }
    });
  }

  ngOnInit() {
    let id = this.router.snapshot.params['id'];

    this.userService.getUser(id).subscribe({
      next: (response) => {
        this.user = response;
        console.log('Пользователь: ', response);
        this.notifier.success(response.username,'Пользователь получен: ' );
      },
      error: (err) => {
        console.log('Ошибка получения пользователя: ',err);
        this.notifier.error(err.error.message,'Ошибка получения пользователя: ');
      }
    })
  }
}
