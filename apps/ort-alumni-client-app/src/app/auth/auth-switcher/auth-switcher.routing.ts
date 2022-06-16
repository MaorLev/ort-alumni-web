import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthSwitcherComponent } from './auth-switcher.component';

const routes: Routes = [
  {
    path: '',
    component: AuthSwitcherComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('../../auth/login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'register',
        loadChildren: () =>
          import('../../auth/pre-registeration/pre-registeration.module').then(
            (m) => m.PreRegisterationModule
          ),
      },
      {
        path: 'reset-password',
        loadChildren: () =>
          import('../../auth/reset-password/reset-password.module').then(
            (m) => m.ResetPasswordModule
          ),
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthSwitcherRoutingModule {}
