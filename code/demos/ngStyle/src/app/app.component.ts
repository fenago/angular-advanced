import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p (click)="onClick()"
    [style.background-color]="'orchid'">
    We need to button up ...
    </p>
    <p [ngStyle]="{'background-color': 'lime',
    'font-size': '20px',
    'font-weight': 'bold'}">
    Here we go...
    </p>
  `,
  styles: [
    `
      .highlight {
        background-color: #ffff00;
      }
      .underline {
        text-decoration: underline;
      }
    `
  ]
})
export class AppComponent {
  isHighlighted = false;

  onClick() {
    this.isHighlighted = !this.isHighlighted;
  }

  calculateClasses() {
    return {
      highlight: this.isHighlighted,
      underline: true
    };
  }
}
