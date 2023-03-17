import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { QuicklinkModule } from 'ngx-quicklink';
import { UiCardModule } from '@ui-components/ui-card';
import { AddEnvVarPipeModule, ReadableDatePipeModule } from '@utils/util-pipes';
import { UiButtonModule } from '@ui-components/ui-button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { FeatureFormModule } from '@features/feature-form';
import { CreateArticleComponent } from './create-article/create-article.component';
import { ArticlesByCategoryComponent } from './articles-by-category/articles-by-category.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { BidiModule } from '@angular/cdk/bidi';
import { ArticleRoutingModule } from './article-routing.module';

@NgModule({
  declarations: [
    ArticleComponent,
    UpdateArticleComponent,
    CreateArticleComponent,
    ArticlesByCategoryComponent,
    ArticleDetailComponent,
  ],
  imports: [
    CommonModule,
    UiCardModule,
    ArticleRoutingModule,
    QuicklinkModule,
    AddEnvVarPipeModule,
    UiButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    UiButtonModule,
    MatRadioModule,
    FeatureFormModule,
    UiCardModule,
    ReadableDatePipeModule,
    BidiModule,
  ],
  exports: [
    ArticleComponent,
    QuicklinkModule,
    UpdateArticleComponent,
    CreateArticleComponent,
    ArticlesByCategoryComponent,
    ArticleDetailComponent,
  ]
})
export class ArticleModule {}
