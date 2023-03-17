import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTeacherComponent } from './add-teacher.component';
import { RouterModule } from '@angular/router';
import { FeatureExpansionPanelModule } from '@features/feature-expansion-panel';
import { FeatureFormModule } from '@features/feature-form';
import { TeacherService } from '../state-teacher/teacher.service';

@NgModule({
  declarations: [AddTeacherComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AddTeacherComponent }
    ]),
    FeatureExpansionPanelModule,
    FeatureFormModule
  ],
  exports: [AddTeacherComponent],
  providers: [TeacherService]
})
export class AddTeacherModule {}
