import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  template: `
  <h1>
  Forms
  </h1>
  <form [formGroup]="loginForm" (submit)="onSubmit()">
  <input formControlName="username" type="text" name="username">
  <br>
  <input formControlName="password" type="text" name="password">
  <br>
  <button>Sign In</button>
  </form>
  <pre *ngIf="loginForm.get('username').invalid">
  {{loginForm.get('username').errors | json}}
  </pre>

  <div *ngIf="loginForm.get('username').dirty &&
  loginForm.get('username').invalid &&
  loginForm.get('username').touched">
  <div *ngIf="loginForm.get('username').hasError('required')">
  Username is required.
  </div>
`,
  styles: []
})
export class AppComponent implements OnInit {
  loginForm: FormGroup;
  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        username: new FormControl(null, Validators.required),
        password: new FormControl()
      },
      { updateOn: 'blur' }
    );
  }
  onSubmit() {
    console.log(this.loginForm.value);
  }
}
