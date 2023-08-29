import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

import { LoggedInGuard } from "./login/shared/logged-in.guard";

import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { ProfileComponent } from "./users/profile/profile.component";
import { UserService } from "./users/shared/user.service";

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, ProfileComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserService, LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
