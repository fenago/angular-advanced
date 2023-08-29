import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ProjectsModule } from "./projects/projects.module";
import { MaterialModule } from "./material/material.module";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { ProjectEffects } from "./projects/shared/project.state";
import { reducers } from "./shared/app.reducer";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ProjectEffects]),
    ProjectsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
