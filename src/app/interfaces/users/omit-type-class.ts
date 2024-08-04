import {Roles} from "./Roles";
import {GetUserPostType} from "../recipes/get-user-post-type";
import {GetUserCommentType} from "./get-user-comment-type";
export interface OmitTypeClass {
  id: string
  username: string,
  role: Roles,
  firstName: string,
  lastName: string,
  middleName: string,
  avatar: string,
  userAgent: string,
  createdOn: string,
  updatedOn: string,
  lastEntry: string,
  isActive: boolean,
  posts: GetUserPostType[],
  comments: GetUserCommentType[]
}
