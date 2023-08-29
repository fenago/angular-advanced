import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeContainerComponent } from './home-container/home-container.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [HomeContainerComponent]
})
export class HomeModule { }
