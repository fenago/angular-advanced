import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <nav>
        <a routerLinkActive="active" [routerLink]="['/home']">Home</a> |
        <a routerLinkActive="active" [routerLink]="['/about']">About</a> |
        <a routerLinkActive="active" [routerLink]="['/contact']">Contact</a> |
        <a routerLinkActive="active" [routerLink]="['/movies']">Movies</a>
      </nav>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      .active {
        background-color: #dddddd;
        padding: 5px;
      }
    `
  ]
})
export class AppComponent {
  title = 'playground';
}
