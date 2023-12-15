import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../model/book.model';
import { books } from '../model/book-list';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent {
  region: string | null = null;
  regionBooks: Book[] | null = null;
  regionDisplayName!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.region = params.get('reg');
      this.filterBookList();
    });
  }

  filterBookList(): void {
    const predefinedregions = ['England', 'America', 'LatinAmerica', 'Spain', 'Russia', 'France'];
  
    if (!this.region) {
      return;
    }
  
    if (this.region === 'Other') {
      // Include books that do not have any of the predefined regions in their associations
      this.regionBooks = books.filter(book => !predefinedregions.some(region => book.associations.includes(region)));
      this.regionDisplayName = 'Other Regions'
    } else {
      // Include books that match the selected region
      this.regionBooks = books.filter(book => book.associations.includes(this.region!));
      this.regionDisplayName = 'Works of ' + this.region;
    }
  }
}
