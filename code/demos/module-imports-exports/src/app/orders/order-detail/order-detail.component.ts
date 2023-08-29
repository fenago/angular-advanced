import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-detail',
  template: `
    <p>
      order-detail works!
    </p>
    <p>{{12345 | orderNumber}}</p>
  `,
  styles: []
})
export class OrderDetailComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
