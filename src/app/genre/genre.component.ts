import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { books } from '../model/book-list';
import { Book } from '../model/book.model';


@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent {
  genre: string | null = null;
  genreBooks: Book[] | null = null;
  genreDisplayName!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.genre = params.get('genre');
      this.filterBookList();
      this.getGenreDisplayName();
    });
  }

  filterBookList(): void {
    const predefinedGenres = ['Fantasy', 'Fiction', 'Historical', 'Comedy', 'Epic'];
  
    if (!this.genre) {
      return;
    }
  
    if (this.genre === 'Other') {
      // Include books that do not have any of the predefined genres in their associations
      this.genreBooks = books.filter(book => !predefinedGenres.some(genre => book.associations.includes(genre)));
    } else {
      // Include books that match the selected genre
      this.genreBooks = books.filter(book => book.associations.includes(this.genre!));
    }
  }

  getGenreDisplayName() {
    if (this.genre === 'Other') {
      this.genreDisplayName = "Works From Assorted Genres";
    } else if (this.genre === 'Historical') {
      this.genreDisplayName = "Works of Historical Fiction";
    } else if (this.genre === 'Epic') {
      this.genreDisplayName = "Epic Works";
    } else {
      this.genreDisplayName = 'Works of ' + this.genre;
    }
  }
}
