import { Component } from '@angular/core';
import { books } from './model/book-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'books-app';

  randomBook = this.getRandomBook();

  getRandomBook() {
    return books[Math.floor(Math.random() * books.length)];
  }
}
