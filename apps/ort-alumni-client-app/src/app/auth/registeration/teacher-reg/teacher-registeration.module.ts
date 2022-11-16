import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherRegisterationComponent } from './teacher-registeration.component';
import { RouterModule } from '@angular/router';
import { FeatureExpansionPanelModule } from '@features/feature-expansion-panel';
import { FeatureFormModule } from '@features/feature-form';

@NgModule({
  declarations: [TeacherRegisterationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: TeacherRegisterationComponent }
    ]),
    FeatureExpansionPanelModule,
    FeatureFormModule
  ],
  exports: [TeacherRegisterationComponent]
})
export class TeacherRegisterationModule {}
