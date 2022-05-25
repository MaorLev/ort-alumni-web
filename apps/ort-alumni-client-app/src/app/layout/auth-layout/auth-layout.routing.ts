import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout.component';
import { NgModule } from '@angular/core';
import { AuthSwitcherComponent } from '@ort-alumni/auth';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        component: AuthSwitcherComponent,
        children: [
          {
            path: 'login',
            loadChildren: () =>
              import('@ort-alumni/auth').then((m) => m.LoginModule),
          },
          {
            path: 'register',
            loadChildren: () =>
              import('@ort-alumni/auth').then((m) => m.PreRegisterationModule),
          },
          { path: '', redirectTo: 'login', pathMatch: 'full' },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthLayoutRoutingModule {}
