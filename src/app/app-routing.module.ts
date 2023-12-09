import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomBookComponent } from './random-book/random-book.component';
import { GenreComponent } from './genre/genre.component';
import { LanguageComponent } from './language/language.component';
import { PopularityComponent } from './popularity/popularity.component';
import { RegionComponent } from './region/region.component';
import { TimePeriodComponent } from './time-period/time-period.component';

const routes: Routes = [
  { path: '', component: RandomBookComponent },
  { path: 'genre/:genre', component: GenreComponent },
  { path: 'language/:lang', component: LanguageComponent },
  { path: 'popularity/:pop', component: PopularityComponent },
  { path: 'region/:reg', component: RegionComponent},
  { path: 'time/:time', component: TimePeriodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
