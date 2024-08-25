// Angular Modules
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ManagementShellComponent } from './management-shell.component';
import { CreateArticleComponent } from '../../pages/article/create-article/create-article.component';
import { UpdateArticleComponent } from '../../pages/article/update-article/update-article.component';



const routes: Routes = [
  {
    path: '',
    component: ManagementShellComponent,
    children: [
      {
        path: 'register-student',
        loadChildren: () =>
          import('../../entities/student/add-student/add-student.module').then(
            (m) => m.AddStudentModule
          ),
      },
      {
        path: 'profile-student',
        loadChildren: () =>
        import('../../pages/profiles/profile-student/profile-student.module').then((m) => m.ProfileStudentModule),
        // canActivate: [AlumniGuard],
      },
      {
        path: 'register-alumnus',
        loadChildren: () =>
          import('../../entities/alumnus-area/alumnus/add-alumnus/add-alumnus.module').then(
            (m) => m.AddAlumnusModule
          ),
      },
      {
        path: 'profile-alumnus',
        loadChildren: () =>
        import('../../pages/profiles/profile-alumnus-area/profile-alumnus/profile-alumnus.module').then((m) => m.ProfileAlumnusModule),
        // canActivate: [AlumniGuard],
      },
      {
        path: 'create-article',
        component: CreateArticleComponent,
      },
      {
        path: 'update-article/:id',
        component: UpdateArticleComponent,
      },
      {
        path: 'profile-article',
        loadChildren: () =>
        import('../../pages/profiles/profile-alumnus-area/profile-alumnus/profile-alumnus.module').then((m) => m.ProfileAlumnusModule),
        // canActivate: [AlumniGuard],
      },
      {
        path: 'register-teacher',
        loadChildren: () =>
          import('../../entities/alumnus-area/teacher/add-teacher/add-teacher.module').then(
            (m) => m.AddTeacherModule
          ),
      },
      {
        path: 'profile-teacher',
        loadChildren: () =>
        import('../../pages/profiles/profile-alumnus-area/profile-teacher/profile-teacher.module').then((m) => m.ProfileTeacherModule),
        // canActivate: [AlumniGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagementShellRoutingModule {}
