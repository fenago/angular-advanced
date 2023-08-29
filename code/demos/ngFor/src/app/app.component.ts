import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <ul>
    <li *ngFor="let fruit of fruits;
               let i = index;">
      {{i + 1}}.
      {{fruit}}
    </li>
  </ul>
  `,
  styles: []
})
export class AppComponent {
  fruits = ['Apple', 'Orange', 'Plum'];
}
