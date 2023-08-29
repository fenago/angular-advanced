import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../users/shared/user.service";
import {
  FormBuilder,
  AbstractControl,
  FormGroup,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  message: string;

  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [],
      password: []
    });
  }

  onSubmit() {
    let formValues = this.loginForm.value;
    console.log(formValues);
    this.userService.login(formValues.email, formValues.password).subscribe(
      result => {
        if (result) {
          this.router.navigate(["/profile"]);
        }
      },
      error => {
        this.message = error;
      }
    );
  }
}
