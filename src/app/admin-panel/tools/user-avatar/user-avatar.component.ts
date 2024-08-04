import {Component, Input} from '@angular/core';
import {GetUsersType} from "../../../interfaces/users/get-users-type";
import {Roles} from "../../../interfaces/users/Roles";
import {OmitTypeClass} from "../../../interfaces/users/omit-type-class";

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.css']
})
export class UserAvatarComponent {
  @Input() user!: OmitTypeClass;
  //protected readonly Roles = Roles;
  protected readonly Roles = Roles;
}
