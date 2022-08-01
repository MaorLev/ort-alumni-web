import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { QuicklinkModule } from 'ngx-quicklink';
import { UiCardModule } from '@ui-components/ui-card';
import { AddEnvVarPipeModule } from '@utils/util-pipes';
import { UiButtonModule } from '@ui-components/ui-button';

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    QuicklinkModule,
    UiCardModule,
    RouterModule.forChild([{ path: '', component: ArticleComponent }]),
    AddEnvVarPipeModule,
    UiButtonModule,
  ],
  exports: [ArticleComponent, QuicklinkModule],
})
export class ArticleModule {}
