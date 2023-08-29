import {
  Component,
  OnInit,
  DoCheck,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-child-a',
  template: `
    <div>
      <h1>Child A</h1>
      <p>Last Changed: {{ lastChanged | date: 'medium' }}</p>
      <p>Nickname: {{ nickname }}</p>
      <button (click)="onClick()">Button A</button> <br /><br />
      <app-grandchild-a></app-grandchild-a>
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
export class ChildAComponent implements DoCheck {
  lastChanged: Date;
  @Input()
  nickname: string;

  ngDoCheck(): void {
    this.lastChanged = new Date();
  }

  onClick() {
    console.log('a');
    this.nickname = 'nickname from child a';
  }
}
