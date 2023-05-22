import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTeacherComponent } from './add-teacher.component';
import { RouterModule } from '@angular/router';
import { FeatureExpansionPanelModule } from '@features/feature-expansion-panel';
import { FeatureFormModule } from '@features/feature-form';
import { TeacherPanelDataConfig } from '../configs-teacher/teacher-panel-data.config';


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
  providers: [TeacherPanelDataConfig],
})
export class AddTeacherModule {}
