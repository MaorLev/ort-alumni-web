// Angular Modules
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { MainLayoutComponent } from './../main-layout/main-layout.component';
import { QuicklinkModule } from 'ngx-quicklink';

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
        path: 'about',
        loadChildren: () =>
          import('../../pages/about/about.module').then((m) => m.AboutModule),
      },
      {
        path: 'articles',
        loadChildren: () =>
          import('../../pages/article/article.module').then((m) => m.ArticleModule)
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainLayoutRoutingModule {}
