import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesByCategoryComponent } from './articles-by-category.component';
import { AddEnvVarPipeModule } from '@utils/util-pipes';
import { QuicklinkModule } from 'ngx-quicklink';
import { RouterModule } from '@angular/router';
import { UiButtonModule } from '@ui-components/ui-button';
import { UiCardModule } from '@ui-components/ui-card';
import { ArticlesCardsModule } from '../articles-cards/articles-cards.module';

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
    ArticlesCardsModule
  ],
})
export class ArticlesByCategoryModule {}
