import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleManagementComponent } from './article-management.component';
import { FeatureTableModule } from '@features/feature-table';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FeatureVaInputModule } from '@features/feature-va-input';
import { UiButtonModule } from '@ui-components/ui-button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [ArticleManagementComponent],
  imports: [
    CommonModule,
    FeatureTableModule,
    RouterModule.forChild([
      { path: '', component: ArticleManagementComponent },
    ]),
    ReactiveFormsModule,
    FeatureVaInputModule,
    UiButtonModule,
    MatInputModule,
    MatRadioModule,
  ],
})
export class ArticleManagementModule {}
