import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { ArticlesCardsComponent } from './articles-cards.component';
import { UiCardModule } from '@ui-components/ui-card';
import { AddEnvVarPipeModule } from '@utils/util-pipes';

@NgModule({
  declarations: [ArticlesCardsComponent],
  imports: [
    CommonModule,
    RouterModule,
    UiCardModule,
    AddEnvVarPipeModule,
    QuicklinkModule,
  ],
  exports: [
     ArticlesCardsComponent],
})
export class ArticlesCardsModule {}
