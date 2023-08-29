import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
     <input [(ngModel)]="message" type="text">
     <p>{{message}}</p>
  `,
  styles: []
})
export class AppComponent {
  message = '';
}
