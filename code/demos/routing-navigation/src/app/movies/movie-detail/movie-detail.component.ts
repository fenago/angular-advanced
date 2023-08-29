import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/movie.model';
import { MovieService } from '../shared/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  template: `
    <div *ngIf="movie">
      <h5>{{movie.name}}</h5>
      <p>
        {{movie.description}}
      </p>
    </div>
  `,
  styles: []
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(p => {
      const id = +p['id'];
      this.movieService.find(id).subscribe(m => (this.movie = m));
    });
  }
}
