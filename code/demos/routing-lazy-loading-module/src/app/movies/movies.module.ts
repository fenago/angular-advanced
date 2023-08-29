import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  imports: [
    CommonModule,
    MoviesRoutingModule
  ],
  declarations: [MovieListComponent, MovieDetailComponent]
})
export class MoviesModule { }
