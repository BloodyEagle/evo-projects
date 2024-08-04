/*export interface LikesInterface {
  id: string;
  liked: boolean;
}*/

export class LikesUpdate {
  static readonly type = '[Likes] Update';
  constructor(public id: string) {}
}
