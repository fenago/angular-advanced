import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <div>
      <h1>Parent</h1>
      <p>Last Changed: {{ lastChanged | date: 'medium' }}</p>
      <button (click)="onClick()">Parent Button</button> <br /><br />
      <app-child-a [nickname]="anickname"> </app-child-a>
      <br />
      <app-child-b></app-child-b>
    </div>
  `,
  styles: [
    `
      div {
        border: 1px dashed;
        padding: 30px;
      }
    `
  ]
})
export class ParentComponent implements DoCheck {
  lastChanged: Date;
  anickname: string;

  ngDoCheck(): void {
    this.lastChanged = new Date();
  }

  onClick() {
    console.log('parent');
    this.anickname = 'nickname from parent';
  }
}
