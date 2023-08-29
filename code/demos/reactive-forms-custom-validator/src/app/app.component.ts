import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidatorFn,
  ValidationErrors
} from '@angular/forms';
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
  <pre *ngIf="loginForm.get('password').invalid">
  {{loginForm.get('password').errors | json}}
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
        username: new FormControl(null, Validators.minLength(3)),
        password: new FormControl(
          null,
          CustomValidators.forbiddenPhraseValidatorFn('password')
        )
      }
      // { updateOn: 'blur' }
    );
  }
  onSubmit() {
    console.log(this.loginForm.value);
  }
}

export class CustomValidators {
  static forbiddenPhrase(control: AbstractControl): ValidationErrors | null {
    if (control.value) {
      if (control.value.toLowerCase() === 'password') {
        return { forbiddenPhrase: true };
      }
    }
    return null;
  }

  // create method signature
  // paste existing validation function, convert inner function to arrow by removing name and adding => before opening curly brace
  // add semi-colon at the end
  // remove hard-coded phrase
  static forbiddenPhraseValidatorFn(phrase: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value) {
        if (control.value.toLowerCase() === phrase) {
          return { forbiddenPhrase: true };
        }
      }
      return null;
    };
  }
}
