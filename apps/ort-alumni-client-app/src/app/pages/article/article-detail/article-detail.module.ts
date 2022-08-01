import { QuicklinkModule } from 'ngx-quicklink';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleDetailComponent } from './article-detail.component';
import { UiButtonModule } from '@ui-components/ui-button';
import { AddEnvVarPipeModule, ReadableDatePipeModule } from '@utils/util-pipes';

@NgModule({
  declarations: [ArticleDetailComponent],
  imports: [
    CommonModule,
    QuicklinkModule,
    RouterModule.forChild([{ path: '', component: ArticleDetailComponent }]),
    UiButtonModule,
    AddEnvVarPipeModule,
    ReadableDatePipeModule,
  ],
  exports: [ArticleDetailComponent, QuicklinkModule],
})
export class ArticleDetailModule {}
