import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from './add-student.component';
import { RouterModule } from '@angular/router';
import { FeatureFormModule } from '@features/feature-form';
import { FeatureExpansionPanelModule } from '@features/feature-expansion-panel';
// import { StudentModule } from '../student.module';

@NgModule({
  declarations: [AddStudentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AddStudentComponent },
    ]),
    FeatureExpansionPanelModule,
    FeatureFormModule,
    // StudentModule
  ],
  exports: [AddStudentComponent],
  providers: [],
})
export class AddStudentModule {}
