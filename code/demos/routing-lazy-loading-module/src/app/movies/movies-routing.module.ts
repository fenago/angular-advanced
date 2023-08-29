import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
  {
    path: '',
    component: MovieListComponent,
    children: [{ path: 'detail/:id', component: MovieDetailComponent }]
  }
  // { path: 'movies/detail/:id', component: MovieDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {}
