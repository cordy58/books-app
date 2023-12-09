import { Component } from '@angular/core';
import { books } from '../model/book-list';

@Component({
  selector: 'app-random-book',
  templateUrl: './random-book.component.html',
  styleUrls: ['./random-book.component.css']
})
export class RandomBookComponent {
  randomBook = this.getRandomBook();

  getRandomBook() {
    return books[Math.floor(Math.random() * books.length)];
  }
}
