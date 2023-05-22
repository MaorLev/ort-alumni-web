import { QuicklinkModule } from 'ngx-quicklink';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleDetailComponent } from './article-detail.component';
import { UiButtonModule } from '@ui-components/ui-button';
import { AddEnvVarPipeModule, ReadableDatePipeModule } from '@utils/util-pipes';
import { BidiModule } from '@angular/cdk/bidi';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ArticleDetailComponent }]),
    QuicklinkModule,
    UiButtonModule,
    AddEnvVarPipeModule,
    ReadableDatePipeModule,
    BidiModule,
  ],
})
export class ArticleDetailModule {}
