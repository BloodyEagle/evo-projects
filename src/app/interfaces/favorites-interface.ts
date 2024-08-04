/*export interface LikesInterface {
  id: string;
  liked: boolean;
}*/

export class FavoritesUpdate {
  static readonly type = '[Favorites] Update';
  constructor(public id: string) {}
}
