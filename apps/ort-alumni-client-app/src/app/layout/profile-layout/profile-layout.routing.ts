// Angular Modules
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { ProfileLayoutComponent } from './profile-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileLayoutComponent,
    children: [
      {
        path: 'profile-alumnus',
        loadChildren: () =>
        import('../../pages/profiles/profile-alumnus-area/profile-alumnus/profile-alumnus.module').then((m) => m.ProfileAlumnusModule),
        // canActivate: [AlumniGuard],
      },
      {
        path: 'profile-teacher',
        loadChildren: () =>
        import('../../pages/profiles/profile-alumnus-area/profile-teacher/profile-teacher.module').then((m) => m.ProfileTeacherModule),
        // canActivate: [AlumniGuard],
      },
      {
        path: 'profile-student',
        loadChildren: () =>
        import('../../pages/profiles/profile-student/profile-student.module').then((m) => m.ProfileStudentModule),
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
