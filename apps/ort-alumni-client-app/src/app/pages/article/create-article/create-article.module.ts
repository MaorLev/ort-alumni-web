import { QuicklinkModule } from 'ngx-quicklink';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { CreateArticleComponent } from './create-article.component';
import { FeatureFormModule } from '@features/feature-form';

@NgModule({
  declarations: [CreateArticleComponent],
  imports: [
    CommonModule,
    QuicklinkModule,
    RouterModule.forChild([{ path: '', component: CreateArticleComponent }]),
    FeatureFormModule,
  ],
  exports: [QuicklinkModule, CreateArticleComponent],
})
export class CreateArticleModule {}
