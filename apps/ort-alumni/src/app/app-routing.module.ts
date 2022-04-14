import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
// import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { QuicklinkStrategy } from 'ngx-quicklink';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./layout/main-layout/main-layout.module').then(
        (m) => m.MainLayoutModule
      )
  },
  {
    path: '**',
    pathMatch: 'full',
    loadChildren: () =>
      import('./pages/page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
    data: {
      preload: false
    }
  }
];

@NgModule({
  // QuicklinkStrategy Liberary for drop preloadingStrategy
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: QuicklinkStrategy })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
