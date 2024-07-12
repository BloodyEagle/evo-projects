import {Component} from '@angular/core';
import {Location} from '@angular/common';
import {BooksService} from "../books.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  constructor(
    private booksService: BooksService,
    private location: Location
  ) {
  }

  get book(): { name: string; postId: number; id: number; body: string; email: string } {
    return this.booksService.data;
  }

  public goBack(): void {
    this.location.back();
  }
}
