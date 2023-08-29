# Angular Authentication & Authorization

## Setup

```
npm install
```

## Run

1.  This code depends on backend code in the `mock-auth-json-server` directory. Open that folder in another editor window and follow the directions in its `readme.md` to get the backend API up and running.
2.  Run the command

```
ng serve --open
```

## Summary

A simple application with `home, login, and profile` routes.

Based on the article:
[Angular Authentication Revisted](https://medium.com/@blacksonic86/angular-2-authentication-revisited-611bf7373bf9).

## Authentication

1.  `users\shared\user.service.ts`

```js
@Injectable()
export class UserService {
  private usersUrl = environment.apiUrl + "users/";

  get isLoggedIn() {
    return !!localStorage.getItem("auth_token");
  }

  get authenticatedUser() {
    let token = localStorage.getItem("auth_token");
    let payload = decode(token);
    return payload;
  }

  constructor(private http: HttpClient) {}

  login(email, password) {
    return this.http
      .post(environment.apiUrl + "auth/login", { email, password })
      .pipe(
        map((res: any) => {
          if (res.success) {
            localStorage.setItem("auth_token", res.access_token);
          }
          return res.success;
        }),
        catchError((error: HttpErrorResponse) => {
          console.error(error);
          return _throw("The email or password you have entered is invalid.");
        })
      );
  }

  logout() {
    localStorage.removeItem("auth_token");
  }

  find(id: number) {
    const authToken = localStorage.getItem("auth_token");
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json"
    });

    return this.http.get<User>(this.usersUrl + id, { headers });
  }
}
```

2.  `login\login.component.ts`

```js
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
```

## Authorization

The following steps were taken to _guard_ the `profile` route and only allow _authenticated_ users to reach the `profile`. Route guards in Angular are implemented in JavaScript and no secret is safe on the client. Route guards simply improve the user experience. The real security is in the backend code that verifies the `authorization token` sent in the header of the get request in `UserService.find()` that runs when the `profile` route is visited.

1.  `login\shared\logged-in.guard.ts`

```js
@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private user: UserService, private router: Router) {}

  canActivate() {
    if (this.user.isLoggedIn) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
```

2.  Add guard to `profile` route in
    `app-routing.module.ts`

```js
const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [LoggedInGuard]
  }
];
```

3.  Provide the route guard in `app.module.ts`

```js
@NgModule({
 ...
  providers: [LoggedInGuard],
  ...
})
export class AppModule { }
```

4.  Install library to decode JWT payload

```
npm install jwt-decode --save
```

5.  In `UserService.ts` import the `jwt-decode` library and use it to decode the payload of the `auth_token`.

```js
import * as decode from "jwt-decode";
...
get authenticatedUser() {
    let token = localStorage.getItem("auth_token");
    let payload = decode(token);
    return payload;
  }
```

6.  In `app.component.ts` create a read-only property so the template can access the `authenticatedUser`

```js
  get authenticatedUser() {
    return this.userService.authenticatedUser;
  }
```

7.  In `app.component.html` display user's email or a logout link

```html
<ng-template #loggedOut>
Welcome {{authenticatedUser.email}}
<a (click)="logout($event)" class="ui item">
  Logout
</a>
</ng-template>
```
