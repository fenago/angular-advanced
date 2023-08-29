import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div [ngSwitch]="fruits.length">
    <p *ngSwitchCase="0" >No records returned.</p>
    <p *ngSwitchCase="1" >1 record returned.</p>
    <p *ngSwitchDefault>{{fruits.length}} records were returned.</p>
  </div>
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
