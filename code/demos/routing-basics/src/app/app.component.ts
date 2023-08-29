import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLinkActive="active" [routerLink]="['/home']">Home</a> |
      <a routerLinkActive="active" [routerLink]="['/about']">About</a> |
      <a routerLinkActive="active" [routerLink]="['/contact']">Contact</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'playground';
}
