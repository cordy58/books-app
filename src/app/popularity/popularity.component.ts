import { Component } from '@angular/core';
import { Book } from '../model/book.model';
import { books } from '../model/book-list';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-popularity',
  templateUrl: './popularity.component.html',
  styleUrls: ['./popularity.component.css']
})
export class PopularityComponent {
  popularity: string | null = null;
  popularityBooks: Book[] | null = null;
  popDisplayName!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.popularity = params.get('pop');
      this.filterBookList();
      this.getCategory();
    });
  }

  filterBookList(): void {
    const predefinedpopularitys = ['Popular', 'Under'];
  
    if (!this.popularity) {
      return;
    }
  
    if (this.popularity === 'Other') {
      // Include books that do not have any of the predefined popularitys in their associations
      this.popularityBooks = books.filter(book => !predefinedpopularitys.some(popularity => book.associations.includes(popularity)));
    } else {
      // Include books that match the selected popularity
      this.popularityBooks = books.filter(book => book.associations.includes(this.popularity!));
    }
  }

  getCategory() {
    if (this.popularity == 'Popular') {
      this.popDisplayName = 'Well Read, Celebrated Works'
    } else {
      this.popDisplayName = 'Under Read, Celebrated Works'
    }
  }
}
