- Start Server
- Generate Components

```
ng serve -o
ng g component home
ng g component about
ng g component contact
```

- Add Routes
  `a-route-path-eager`
  `a-route-path-default`

```
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' }
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];
```

- Add Navigation

```
 <ul>
        <li ><a [routerLink]="['/home']">Home</a></li>
        <li><a [routerLink]="['/about']">About</a></li>
        <li><a [routerLink]="['/contact']">Contact</a></li>
      </ul>
```

- Highlight Active Navigation Item

```
      <ul>
        <li routerLinkActive="active" ><a [routerLink]="['/home']">Home</a></li>
        <li routerLinkActive="active"><a [routerLink]="['/about']">About</a></li>
        <li routerLinkActive="active"><a [routerLink]="['/contact']">Contact</a></li>
      </ul>
```
