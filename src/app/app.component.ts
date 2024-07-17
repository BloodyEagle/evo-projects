import {Component} from '@angular/core';
import {Book} from "./interfaces/book";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  new_book: Book = {
    title: '',
    author: ''
  };

  books: Book[] = [
    {title: 'Аннушка', author: 'Толстой'},
    {title: 'Преступление', author: 'Достоевский'},
    {title: 'Комедия', author: 'Алигери'}
  ];

  createBook() {
    this.books.push({
      title: this.new_book.title,
      author: this.new_book.author,
    });
  }
}
