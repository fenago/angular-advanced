import { Component, OnInit, DoCheck, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child-b',
  template: `
    <div>
      <h1>Child B</h1>
      <p>Last Changed: {{ lastChanged | date: 'medium' }}</p>
      <button (click)="onClick()">Button B</button>
    </div>
  `,
  styles: [
    `
      div {
        border: 1px dashed;
        padding: 30px;
      }
    `
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildBComponent implements DoCheck {
  lastChanged: Date;

  ngDoCheck(): void {
    this.lastChanged = new Date();
  }

  onClick() {
    console.log('b');
  }
}
