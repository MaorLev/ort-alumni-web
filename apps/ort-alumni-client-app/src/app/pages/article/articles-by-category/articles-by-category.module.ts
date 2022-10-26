import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesByCategoryComponent } from './articles-by-category.component';
import { AddEnvVarPipeModule } from '@utils/util-pipes';
import { QuicklinkModule } from 'ngx-quicklink';
import { RouterModule } from '@angular/router';
import { UiButtonModule } from '@ui-components/ui-button';
import { UiCardModule } from '@ui-components/ui-card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ArticlesByCategoryComponent },
    ]),
    QuicklinkModule,
    UiCardModule,
    AddEnvVarPipeModule,
    UiButtonModule,
  ],
  exports: [QuicklinkModule],
})
export class ArticlesByCategoryModule {}
