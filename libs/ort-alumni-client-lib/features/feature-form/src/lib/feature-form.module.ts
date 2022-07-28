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
    FeatureVaTextareaModule
  ],
  declarations: [FormComponent],
  exports: [FormComponent],
  providers: [FormBuilderService],
})
export class FeatureFormModule {}
