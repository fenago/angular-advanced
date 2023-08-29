import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <img [src]="image.path" [title]="image.name"
    [alt]="image.name">

`,
  styles: []
})
export class AppComponent {
  image = {
    path: '../assets/angular_solidBlack.png',
    name: 'Angular Logo'
  };
}
