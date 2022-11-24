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
        import('../../entities/alumnus-area/alumnus/edit-alumnus/edit-alumnus.module').then((m) => m.EditAlumnusModule),
        // canActivate: [AlumniGuard],
      },
      {
        path: 'student-edit',
        loadChildren: () =>
        import('../../entities/student/edit-student/edit-student.module').then((m) => m.EditStudentModule),
        // canActivate: [AlumniGuard],
      },
      {
        path: 'teacher-edit',
        loadChildren: () =>
        import('../../entities/alumnus-area/teacher/edit-teacher/edit-teacher.module').then((m) => m.EditTeacherModule),
        // canActivate: [AlumniGuard],
      },
      {
        path: 'employer-edit',
        loadChildren: () =>
        import('../../entities/employer-area/employer/edit-employer/edit-employer.module').then((m) => m.EditEmployerModule),
        // canActivate: [AlumniGuard],
      },
      {
        path: 'joboffer-edit',
        loadChildren: () =>
        import('../../entities/employer-area/joboffer/edit-joboffer/edit-joboffer.module').then((m) => m.EditJobofferModule),
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
