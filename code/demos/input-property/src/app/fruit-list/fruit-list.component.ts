import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fruit-list',
  template: `
  <ul>
  <li *ngFor="let fruit of fruits;">
    {{fruit}}
  </li>
</ul>
  `,
  styles: []
})
export class FruitListComponent implements OnInit {
  @Input()
  fruits: string[];
  constructor() {}

  ngOnInit() {}
}
