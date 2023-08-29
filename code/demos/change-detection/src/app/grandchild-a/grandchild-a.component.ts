import {
  Component,
  OnInit,
  Input,
  DoCheck,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-grandchild-a',
  template: `
    <div>
      <h1>Grand Child A</h1>
      <p>Last Changed: {{ lastChanged | date: 'medium' }}</p>
      <p>Nickname: {{ nickname }}</p>
      <button (click)="onClick($event)">Button A</button>
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
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrandchildAComponent implements DoCheck {
  lastChanged: Date;
  @Input()
  nickname: string;

  ngDoCheck(): void {
    this.lastChanged = new Date();
  }

  onClick(event) {
    event.preventDefault();
    console.log(' grandchild a');
  }
}
