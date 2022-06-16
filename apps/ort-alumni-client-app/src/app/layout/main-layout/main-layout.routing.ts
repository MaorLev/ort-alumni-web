import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './../main-layout/main-layout.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../../pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('../../pages/home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('../auth-layout/auth-layout.module').then(
        (m) => m.AuthLayoutModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainLayoutRoutingModule {}
