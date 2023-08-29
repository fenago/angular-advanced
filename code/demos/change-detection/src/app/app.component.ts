import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-parent></app-parent>
  `,
  styles: []
})
export class AppComponent {}

// OnPush:
//  component with changed input or event, causes check on itself (component) and all ancestors
//  input "changes" then checks itself (component with input) and all ancestors
//  event happens checks itself (component where event was raised, Ex. click) and all ancestors

// Default:
// input "changes" then the entire tree is checked
// event triggered then the entire tree is checked
