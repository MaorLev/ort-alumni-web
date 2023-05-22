import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherDetailComponent } from './teacher-detail.component';

@NgModule({
  declarations: [TeacherDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [TeacherDetailComponent]
})
export class TeacherDetailModule {}
