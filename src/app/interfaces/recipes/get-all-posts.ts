import {Author} from "../users/author";

export interface GetAllPosts {
  id: string;
  body: string;
  title: string;
  tags: string[];
  image: string;
  timeCooking: number;
  author: Author;
  createdOn: string;
  updatedOn: string;
}
