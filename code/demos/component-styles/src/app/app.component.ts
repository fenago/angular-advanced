import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h1>
        Welcome to {{title}}!
      </h1>
  `,
  styleUrls: ['./app.component.css']
  // styles: [
  //   `
  //     h1 {
  //       color: rgb(255, 165, 0);
  //     }
  //   `
  // ]
})
export class AppComponent {
  title = 'playground';
}
