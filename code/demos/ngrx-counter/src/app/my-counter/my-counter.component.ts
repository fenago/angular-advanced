import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Increment, Decrement, Reset } from '../counter.actions';

@Component({
  selector: 'app-my-counter',
  template: `
    <div>Current Count: {{ count$ | async }}</div>

    <button (click)="increment()">Increment</button>

    <button (click)="decrement()">Decrement</button>

    <button (click)="reset()">Reset Counter</button>
  `,
  styles: []
})
export class MyCounterComponent implements OnInit {
  count$: Observable<number>;
  ngOnInit(): void {}

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }

  increment() {
    this.store.dispatch(new Increment());
  }

  decrement() {
    this.store.dispatch(new Decrement());
  }

  reset() {
    this.store.dispatch(new Reset());
  }
}
