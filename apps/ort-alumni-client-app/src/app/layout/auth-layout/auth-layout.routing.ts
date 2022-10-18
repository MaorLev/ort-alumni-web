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
      {
        path: 'register-student',
        loadChildren: () =>
          import('../../auth/registeration/student-reg/student-registeration.module').then(
            (m) => m.StudentRegisterationModule
          ),
      },
      {
        path: 'register-alumnus',
        loadChildren: () =>
          import('../../auth/registeration/alumnus-reg/alumnus-registeration.module').then(
            (m) => m.AlumnusRegisterationModule
          ),
      },
      {
        path: 'register-employer',
        loadChildren: () =>
          import('../../auth/registeration/employer-reg/employer-registeration.module').then(
            (m) => m.EmployerRegisterationModule
          ),
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthLayoutRoutingModule {}
