import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditTeacherComponent } from './edit-teacher.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [EditTeacherComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: EditTeacherComponent }])
  ],
  exports: [EditTeacherComponent]
})
export class EditTeacherModule {}
