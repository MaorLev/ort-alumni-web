import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDetailComponent } from './student-detail.component';

@NgModule({
  declarations: [StudentDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [StudentDetailComponent]
})
export class StudentDetailModule {}
