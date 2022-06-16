import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthLayoutComponent } from './auth-layout.component';


const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
        import('../../auth/auth-switcher/auth-switcher.module').then((m) => m.AuthSwitcherModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthLayoutRoutingModule {}
