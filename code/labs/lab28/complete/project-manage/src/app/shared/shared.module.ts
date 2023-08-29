import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncateStringPipe } from './truncate-string.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TruncateStringPipe],
  exports: [TruncateStringPipe]
})
export class SharedModule { }
