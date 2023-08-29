import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p (click)="onClick()"
    [ngClass]="calculateClasses()">
    We need to button up ...
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
