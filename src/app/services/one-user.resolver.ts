import { ResolveFn } from '@angular/router';
import {inject} from "@angular/core";
import {OmitTypeClass} from "../interfaces/users/omit-type-class";
import {UserService} from "./user.service";

export const oneUserResolver: ResolveFn<OmitTypeClass> = (route, state) => {
  let id = route.paramMap.get('id') || '';
    return inject(UserService).getUser(id);
};
