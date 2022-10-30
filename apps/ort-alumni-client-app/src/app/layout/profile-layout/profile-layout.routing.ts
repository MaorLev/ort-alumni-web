import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProfileLayoutComponent } from './profile-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileLayoutComponent,
    children: [
      {
        path: 'alumnus-edit',
        loadChildren: () =>
        import('../../profiles/p-alumnus/p-alumnus.module').then((m) => m.PAlumnusModule),
        // canActivate: [AlumniGuard],
      },
      {
        path: 'student-edit',
        loadChildren: () =>
        import('../../profiles/p-student/p-student.module').then((m) => m.PStudentModule),
        // canActivate: [AlumniGuard],
      },
      {
        path: 'teacher-edit',
        loadChildren: () =>
        import('../../profiles/p-teacher/p-teacher.module').then((m) => m.PTeacherModule),
        // canActivate: [AlumniGuard],
      },
      {
        path: 'employer-edit',
        loadChildren: () =>
        import('../../profiles/p-employer/p-employer.module').then((m) => m.PEmployerModule),
        // canActivate: [AlumniGuard],
      },
      {
        path: 'joboffer-edit',
        loadChildren: () =>
        import('../../profiles/p-joboffer/p-joboffer.module').then((m) => m.PJobofferModule),
        // canActivate: [AlumniGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileLayoutRoutingModule {}
