import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-email-subscribe',
  template: `
   <input type="text" #email placeholder="email" />
   <button (click)="onClick(email.value)">Subscribe</button>
  `,
  styles: []
})
export class EmailSubscribeComponent implements OnInit {
  @Output()
  subscribe = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}
  onClick(email: string) {
    this.subscribe.emit(email);
  }
}
