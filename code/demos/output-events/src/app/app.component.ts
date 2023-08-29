import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-email-subscribe (subscribe)="onSubscribe($event)"></app-email-subscribe>
  {{message}}
  `,
  styles: []
})
export class AppComponent {
  message: string;
  onSubscribe(email) {
    this.message = `Successfully subscribed. Please check your email ${email} and click link.`;
  }
}
