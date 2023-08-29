import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-fruit-list [fruits]="data"></app-fruit-list>
  `,
  styles: []
})
export class AppComponent {
  data: string[] = ['Apple', 'Orange', 'Plum'];
}
