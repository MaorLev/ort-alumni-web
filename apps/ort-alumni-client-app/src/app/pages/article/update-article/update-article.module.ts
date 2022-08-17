import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateArticleComponent } from './update-article.component';
import { QuicklinkModule } from 'ngx-quicklink';
import { RouterModule } from '@angular/router';
import { FeatureFormModule } from '@features/feature-form';

@NgModule({
  declarations: [UpdateArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: UpdateArticleComponent }]),
    QuicklinkModule,
    FeatureFormModule,
  ],
  exports: [QuicklinkModule, UpdateArticleComponent],
})
export class UpdateArticleModule {}
