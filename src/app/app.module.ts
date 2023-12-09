import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomBookComponent } from './random-book/random-book.component';
import { GenreComponent } from './genre/genre.component';
import { TimePeriodComponent } from './time-period/time-period.component';
import { RegionComponent } from './region/region.component';
import { LanguageComponent } from './language/language.component';
import { PopularityComponent } from './popularity/popularity.component';
import { BookCardComponent } from './book-card/book-card.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomBookComponent,
    GenreComponent,
    TimePeriodComponent,
    RegionComponent,
    LanguageComponent,
    PopularityComponent,
    BookCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
