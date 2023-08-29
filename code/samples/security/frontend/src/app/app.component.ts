import { Component } from "@angular/core";
import { UserService } from "./users/shared/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  get isLoggedIn() {
    return this.userService.isLoggedIn;
  }

  get authenticatedUser() {
    return this.userService.authenticatedUser;
  }

  constructor(private userService: UserService, private router: Router) {}

  logout(event) {
    event.preventDefault();
    this.userService.logout();
    this.router.navigate(["/"]);
  }
}
