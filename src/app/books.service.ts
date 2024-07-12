import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private _data: { name: string; postId: number; id: number; body: string; email: string } =

    {
      "postId": 1,
      "id": 1,
      "name": "id labore ex et quam laborum",
      "email": "Eliseo@gardner.biz",
      "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    }

  get data(): { name: string; postId: number; id: number; body: string; email: string } {
    return this._data;
  }

  constructor() { }
}
