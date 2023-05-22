import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDetailComponent } from './student-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [StudentDetailComponent],
  imports: [
    CommonModule,
    // RouterModule.forChild([{ path: '', component: StudentDetailComponent }]),
  ],
  exports: [StudentDetailComponent]
})
export class StudentDetailModule {}
