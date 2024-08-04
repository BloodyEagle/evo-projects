import {Author} from "../users/author";

export interface TzComments {
  id: string;
  postId: string;
  user: Author;
  text: string;
  createdOn: string;
  updatedOn: string;
}
