import { Component, OnInit } from '@angular/core';
import { FruitService } from './fruit.service';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li *ngFor="let fruit of fruits; let i = index">
        {{ i + 1 }}. {{ fruit }}
      </li>
    </ul>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  fruits = [];

  constructor(private fruitService: FruitService) {}

  ngOnInit(): void {
    this.fruitService.list().subscribe(data => (this.fruits = data));
    console.log('completed OnInit.');
  }
}
