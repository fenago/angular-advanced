import { NgModule } from "@angular/core";

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatProgressBarModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatInputModule
} from "@angular/material";

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule
  ]
})
export class MaterialModule {}
