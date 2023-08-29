import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from './movie.model';
import { MOVIES } from './mock-movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }
  list(): Observable<Movie[]> {
    return of(MOVIES);
  }

  find(id: number): Observable<Movie> {
    const movie = MOVIES.find(m => m.id === id);
    return of(movie);
  }
}
