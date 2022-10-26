import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRegisterationComponent } from './student-registeration.component';
import { RouterModule } from '@angular/router';
import { FeatureFormModule } from '@features/feature-form';
import { FeatureExpansionPanelModule } from '@features/feature-expansion-panel';

@NgModule({
  declarations: [StudentRegisterationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: StudentRegisterationComponent },
    ]),
    FeatureExpansionPanelModule,
    FeatureFormModule
  ],
  exports: [StudentRegisterationComponent],
  providers: [],
})
export class StudentRegisterationModule {}
