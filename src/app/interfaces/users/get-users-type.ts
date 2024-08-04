import {Roles} from "./Roles";

export interface GetUsersType {
  username: string,
  role: string,
  firstName: string,
  lastName: string,
  middleName: string,
  avatar: string,
  createdOn: string,
  updatedOn: string,
  lastEntry: string,
  isActive: true,
  id: string
}
