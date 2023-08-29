import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FruitService {
  constructor() {}

  list(): Observable<string[]> {
    return of(['Apple', 'Orange', 'Plum']).pipe(delay(4000));
  }
}
