import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h2>{{image.name}}</h2>
  <p>{{image.path}} </p>
`,
  styles: []
})
export class AppComponent {
  image = {
    path: '../assets/angular_solidBlack.png',
    name: 'Angular Logo'
  };
}
