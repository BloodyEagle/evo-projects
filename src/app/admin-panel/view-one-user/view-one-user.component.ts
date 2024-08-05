import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";
import {OmitTypeClass} from "../../interfaces/users/omit-type-class";

@Component({
  selector: 'app-view-one-user',
  templateUrl: './view-one-user.component.html',
  styleUrls: ['./view-one-user.component.css']
})
export class ViewOneUserComponent implements OnInit {
  public user!: OmitTypeClass;

  constructor(
    private userService: UserService,
    private notifier: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
  }

  public deleteUser(id: string): void {
    this.userService.deleteUser(id).subscribe({
      next: (response) => {
        this.router.navigateByUrl('/admin/users');
      },
      error: (err) => {
        this.notifier.error(err.error.message, 'Ошибка удаления пользователя');
      },
      complete: () => {
      }
    });
  }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];

    this.activatedRoute.data.subscribe({
      next: ({user}) => {
        this.user = user;
      },
      error: error => {
        this.notifier.error(error.error.message, 'Ошибка получения данных пользователя');
      }
    });


  }
}
