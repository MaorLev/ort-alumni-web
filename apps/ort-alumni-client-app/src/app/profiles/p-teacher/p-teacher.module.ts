import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PTeacherComponent } from './p-teacher.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PTeacherComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PTeacherComponent }])
  ],
  exports: [PTeacherComponent]
})
export class PTeacherModule {}
