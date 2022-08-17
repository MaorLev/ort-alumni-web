import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import {
  DynamicAttributesModule,
  DynamicIoModule,
  DynamicModule,
} from 'ng-dynamic-component';
import { ReactiveFormsModule } from '@angular/forms';
import { UiButtonModule } from '@ui-components/ui-button';
import { FormBuilderService } from './form-builder.service';
import { FeatureVaDropdownSelectionModule } from '@features/feature-va-dropdown-selection';
import { FeatureVaInputModule } from '@features/feature-va-input';
import { FeatureFileUploadModule } from '@features/feature-file-upload';
import { FeatureVaTextareaModule } from '@features/feature-va-textarea';
import { VaChipsSelectModule } from '@features/va-chips-select';
import { FeatureVaDatePickerModule } from '@features/feature-va-date-picker';
import { FeaureVaSelectAutoCompleteModule } from '@features/feature-va-select-auto-complete';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UiButtonModule,
    DynamicAttributesModule,
    DynamicIoModule,
    DynamicModule,
    FeatureVaDropdownSelectionModule,
    FeatureVaInputModule,
    FeatureFileUploadModule,
    FeatureVaTextareaModule,
    VaChipsSelectModule,
    FeatureVaDatePickerModule,
    FeaureVaSelectAutoCompleteModule,
    MatNativeDateModule,
    MatFormFieldModule
  ],
  declarations: [FormComponent],
  exports: [FormComponent],
  providers: [FormBuilderService, { provide: MAT_DATE_LOCALE, useValue: 'he' }],
})
export class FeatureFormModule {}
