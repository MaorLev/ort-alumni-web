import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateArticleComponent } from './update-article.component';
import { FeatureFileUploadModule } from '@features/feature-file-upload';
import { FeatureVaDropdownSelectionModule } from '@features/feature-va-dropdown-selection';
import { FeatureVaInputModule } from '@features/feature-va-input';
import { QuicklinkModule } from 'ngx-quicklink';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UiButtonModule } from '@ui-components/ui-button';

@NgModule({
  declarations: [UpdateArticleComponent],
  imports: [CommonModule,
    QuicklinkModule,
    RouterModule.forChild([{ path: '', component: UpdateArticleComponent }]),
    ReactiveFormsModule,
    FeatureVaInputModule,
    UiButtonModule,
    FeatureVaDropdownSelectionModule,
    FeatureFileUploadModule,],
  exports: [QuicklinkModule, UpdateArticleComponent],
})
export class UpdateArticleModule {}
