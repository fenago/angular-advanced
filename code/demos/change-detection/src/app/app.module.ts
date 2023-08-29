import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { GrandchildAComponent } from './grandchild-a/grandchild-a.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildAComponent,
    ChildBComponent,
    GrandchildAComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
