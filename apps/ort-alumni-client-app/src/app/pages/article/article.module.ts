import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { QuicklinkModule } from 'ngx-quicklink';
import { UiCardModule } from '@ui-components/ui-card';
import { AddEnvVarPipeModule } from '@utils/util-pipes';
import { UiButtonModule } from '@ui-components/ui-button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    UiCardModule,
    RouterModule.forChild([{ path: '', component: ArticleComponent }]),
    QuicklinkModule,
    AddEnvVarPipeModule,
    UiButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    UiButtonModule,
    MatRadioModule,
  ],
  exports: [ArticleComponent, QuicklinkModule],
})
export class ArticleModule {}
