import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentManagementComponent } from './student-management.component';
import { RouterModule } from '@angular/router';
import { FeatureTableModule } from '@features/feature-table';
import { ReactiveFormsModule } from '@angular/forms';
import { FeatureVaInputModule } from '@features/feature-va-input';
import { UiButtonModule } from '@ui-components/ui-button';

@NgModule({
  declarations: [StudentManagementComponent],
  imports: [
    CommonModule,
    FeatureTableModule,
    RouterModule.forChild([
      { path: '', component: StudentManagementComponent },
    ]),

    ReactiveFormsModule,
    FeatureVaInputModule,
    UiButtonModule
  ],
})
export class StudentManagementModule {}
