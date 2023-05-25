import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTeacherComponent } from './add-teacher.component';
import { RouterModule } from '@angular/router';
import { FeatureExpansionPanelModule } from '@features/feature-expansion-panel';
import { FeatureFormModule } from '@features/feature-form';
import { TeacherPanelDataConfig } from '../configs-teacher/teacher-panel-data.config';
import { HeroModule } from '../../../../layout/common-layout/hero/hero.module';


@NgModule({
  declarations: [AddTeacherComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AddTeacherComponent }
    ]),
    FeatureExpansionPanelModule,
    FeatureFormModule,
    HeroModule
  ],
  providers: [TeacherPanelDataConfig],
})
export class AddTeacherModule {}
