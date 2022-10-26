import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ArticleComponent } from './article.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticlesByCategoryComponent } from './articles-by-category/articles-by-category.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { UpdateArticleComponent } from './update-article/update-article.component';




const routes: Routes = [

      {
        path: '',
        component: ArticleComponent,
      },
      {
        path: 'article-detail/:id',
        component: ArticleDetailComponent,
      },
      {
        path: 'articles-by-category/:id',
        component: ArticlesByCategoryComponent,
      },
      {
        path: 'articles-by-category',
        component: ArticlesByCategoryComponent,
      },
      {
        path: 'create-article',
        component: CreateArticleComponent,
      },
      {
        path: 'update-article/:id',
        component: UpdateArticleComponent,
      },
    ]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleRoutingModule {}
