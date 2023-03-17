import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherProfileComponent } from './teacher-profile.component';
import { RouterModule } from '@angular/router';
import { TeacherDetailModule } from '../../../entities/alumnus-area/teacher/teacher-detail/teacher-detail.module';
import { EditTeacherModule } from '../../../entities/alumnus-area/teacher/edit-teacher/edit-teacher.module';
import { QuicklinkModule } from 'ngx-quicklink';

@NgModule({
  declarations: [TeacherProfileComponent],
  imports: [
    CommonModule,
    QuicklinkModule,
    RouterModule.forChild([
      { path: '', component: TeacherDetailModule },
      { path: 'teacher-detail', component: TeacherDetailModule },
      { path: 'teacher-edit', component: EditTeacherModule },
    ]),
  ],
  exports: [TeacherProfileComponent,QuicklinkModule],
})
export class TeacherProfileModule {}
