import { FeatureVaTextareaModule } from './../../../../../../../libs/ort-alumni-client-lib/features/feature-va-textarea/src/lib/feature-va-textarea.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { QuicklinkModule } from 'ngx-quicklink';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureVaInputModule } from '@features/feature-va-input';
import { UiButtonModule } from '@ui-components/ui-button';
import { RouterModule } from '@angular/router';
import { CreateArticleComponent } from './create-article.component';
import { FeatureFileUploadModule } from '@features/feature-file-upload';
import { FeatureVaDropdownSelectionModule } from '@features/feature-va-dropdown-selection';

@NgModule({
  declarations: [CreateArticleComponent],
  imports: [
    CommonModule,
    QuicklinkModule,
    RouterModule.forChild([{ path: '', component: CreateArticleComponent }]),
    ReactiveFormsModule,
    FeatureVaInputModule,
    UiButtonModule,
    FeatureVaDropdownSelectionModule,
    FeatureFileUploadModule,
    FeatureVaTextareaModule
  ],
  exports: [QuicklinkModule, CreateArticleComponent]
})
export class CreateArticleModule {}
