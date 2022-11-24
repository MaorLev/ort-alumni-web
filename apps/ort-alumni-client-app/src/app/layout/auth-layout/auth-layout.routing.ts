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
          import('../../entities/student/add-student/add-student.module').then(
            (m) => m.AddStudentModule
          ),
      },
      {
        path: 'register-alumnus',
        loadChildren: () =>
          import('../../entities/alumnus-area/alumnus/add-alumnus/add-alumnus.module').then(
            (m) => m.AddAlumnusModule
          ),
      },
      {
        path: 'register-teacher',
        loadChildren: () =>
          import('../../entities/alumnus-area/teacher/add-teacher/add-teacher.module').then(
            (m) => m.AddTeacherModule
          ),
      },
      {
        path: 'register-employer',
        loadChildren: () =>
          import('../../entities/employer-area/employer/add-employer/add-employer.module').then(
            (m) => m.AddEmployerModule
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
