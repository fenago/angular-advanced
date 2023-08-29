import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TagOneComponent } from './tag-one.component';
import { TagTwoComponent } from './tag-two.component';
import { TagThreeComponent } from './tag-three.component';

@NgModule({
  declarations: [AppComponent, TagOneComponent, TagTwoComponent, TagThreeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
