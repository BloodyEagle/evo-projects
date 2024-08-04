import {Component} from '@angular/core';
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

  public deleteUser(id: string): void {
    this.userService.deleteUser(id).subscribe({
      next: (response) => {
        this.router2.navigateByUrl('/admin/users');
      },
      error: (err) => {
        this.notifier.error(err.error.message, 'Ошибка удаления пользователя');
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
      },
      error: (err) => {
        this.notifier.error(err.error.message, 'Ошибка получения пользователя: ');
      }
    })
  }
}
