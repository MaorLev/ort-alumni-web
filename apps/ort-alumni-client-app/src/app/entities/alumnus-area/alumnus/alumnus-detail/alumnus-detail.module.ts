import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnusDetailComponent } from './alumnus-detail.component';

@NgModule({
  declarations: [AlumnusDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [AlumnusDetailComponent]
})
export class AlumnusDetailModule {}
