import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './../main-layout/main-layout.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [

      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () =>
          import('../../pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'article-detail/:id',
        loadChildren: () =>
          import('../../pages/article/article-detail/article-detail.module').then((m) => m.ArticleDetailModule),
      },
      {
        path: 'articles/:id',
        loadChildren: () =>
          import('../../pages/article/article.module').then((m) => m.ArticleModule)
      },
      {
        path: 'articles',
        loadChildren: () =>
          import('../../pages/article/article.module').then((m) => m.ArticleModule)
      },
      {
        path: 'create-article',
        loadChildren: () =>
          import('../../pages/article/create-article/create-article.module').then((m) => m.CreateArticleModule),
      },
      {
        path: 'update-article/:id',
        loadChildren: () =>
          import('../../pages/article/update-article/update-article.module').then((m) => m.UpdateArticleModule),
      },

    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainLayoutRoutingModule {}
