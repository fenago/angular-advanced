import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/movie.model';
import { MovieService } from '../shared/movie.service';

@Component({
  selector: 'app-movie-list',
  template: `
  <div>
  <ul>
      <li *ngFor="let movie of movies" >
          <a [routerLink]="['detail', movie.id]">{{movie.name}}</a>
      </li>
  </ul>
  </div>
  `,
  styles: []
})
export class MovieListComponent implements OnInit {
  movies: Movie[];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.list().subscribe(data => (this.movies = data));
  }
}
