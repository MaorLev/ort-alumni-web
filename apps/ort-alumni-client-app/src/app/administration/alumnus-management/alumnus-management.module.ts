import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnusManagementComponent } from './alumnus-management.component';
import { FeatureTableModule } from '@features/feature-table';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FeatureVaInputModule } from '@features/feature-va-input';
import { UiButtonModule } from '@ui-components/ui-button';
import { FeatureCheckboxModule } from '@features/feature-checkbox';




@NgModule({
  declarations: [
    AlumnusManagementComponent
  ],
  imports: [
    CommonModule,
    FeatureTableModule,
    RouterModule.forChild([
      { path: '', component: AlumnusManagementComponent },
    ]),
    ReactiveFormsModule,
    FeatureVaInputModule,
    UiButtonModule,
    FeatureCheckboxModule
  ]
})
export class AlumnusManagementModule { }
