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
    RouterModule.forChild([{ path: '', component: CreateArticleComponent }]),
    QuicklinkModule,
    FeatureFormModule,
  ],
  exports: [QuicklinkModule, CreateArticleComponent],
})
export class CreateArticleModule {}
