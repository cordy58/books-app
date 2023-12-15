import { Component } from '@angular/core';
import { books } from '../model/book-list';

@Component({
  selector: 'app-random-book',
  templateUrl: './random-book.component.html',
  styleUrls: ['./random-book.component.css']
})
export class RandomBookComponent {
  randomBook = this.getRandomBook();
  randomAttribute!: string;
  attributeDisplayString!: string;
  filter!: string;
  argument!: string;

  ngOnInit() {
    this.randomBook = this.getRandomBook();
    this.getRandomAttribute();
    this.fixAttributeString();
    this.getFilter();
    this.getArgument();
  }
  
  getRandomBook() {
    return books[Math.floor(Math.random() * books.length)];
  }

  getRandomAttribute() {
    const randomIndex = Math.floor(Math.random() * this.randomBook.associations.length)
    this.randomAttribute = this.randomBook.associations[randomIndex];
  }

  fixAttributeString() {
    switch (this.randomAttribute) {
      case "Epic":
        this.attributeDisplayString = "A Suggestion From Epics";
        break;
      case "Historical":
        this.attributeDisplayString = "A Suggestion From Historical Fiction";
        break;
      case "Poem":
        this.attributeDisplayString = "A Suggestion From Poetry";
        break;
      case "Popular":
        this.attributeDisplayString = "A Suggestion Most People Love";
        break;
      case "Graphic Novel":
        this.attributeDisplayString = "A Suggestion From Graphic Novels";
        break;
      case "Under":
        this.attributeDisplayString = "A Suggestion Most People Haven't Read";
        break;
      case "LatinAmerica":
        this.attributeDisplayString = "A Suggestion From Latin America";
        break;
      default:
        this.attributeDisplayString = "A Suggestion From " + this.randomAttribute;
        break;
    }
  }

  getNewRandomBook() {
    this.randomBook = this.getRandomBook();
    this.getRandomAttribute();
    this.fixAttributeString();
    this.getFilter();
    this.getArgument();
  }

  getFilter() {
    switch (this.randomAttribute) {
      case "Epic":
      case "Fantasy":
      case "Fiction":
      case "Historical":
      case "Comedy":
      case "Romance":
      case "Magical Realism":
        this.filter = "/genre";        
        break;
      case "America":
      case "England":
      case "Spain":
      case "Russia":
      case "LatinAmerica":
      case "France":
      case "Greece":
        this.filter = "/region";
        break;
      case "Popular":
      case "Under":
        this.filter = "/popularity";
        break;
      default:
        this.filter = "";
        break;
    }
  }

  getArgument() {
    switch (this.randomAttribute) {
      case "Romance":
      case "Magical Realism":
      case "Greece":
        this.argument = "Other";
        break;
      default:
        this.argument = this.randomAttribute;
        break;
    }
  }
}
