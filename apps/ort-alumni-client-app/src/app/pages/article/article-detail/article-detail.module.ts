import { QuicklinkModule } from 'ngx-quicklink';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleDetailComponent } from './article-detail.component';
import { UiButtonModule } from '@ui-components/ui-button';
import { AddEnvVarPipeModule, ReadableDatePipeModule } from '@utils/util-pipes';
import { BidiModule } from '@angular/cdk/bidi';

@NgModule({
  declarations: [ArticleDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ArticleDetailComponent }]),
    QuicklinkModule,
    UiButtonModule,
    AddEnvVarPipeModule,
    ReadableDatePipeModule,
    BidiModule,
  ],
  exports: [ArticleDetailComponent, QuicklinkModule],
})
export class ArticleDetailModule {}
