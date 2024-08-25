// Angular Modules
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { AdminDashboardLayoutComponent } from './admin-dashboard-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardLayoutComponent,
    children: [
      {
        path: 'admin-dashboard',
        loadChildren: () =>
          import(
            '../../administration/admin-dashboard/admin-dashboard.module'
          ).then((m) => m.AdminDashboardModule),
      },
      {
        path: 'management-shell',
        loadChildren: () =>
          import(
            '../../administration/management-shell/management-shell.module'
          ).then((m) => m.ManagementShellModule),
      },
      {
        path: 'students-management',
        loadChildren: () =>
          import(
            '../../administration/student-management/student-management.module'
          ).then((m) => m.StudentManagementModule),
      },
      {
        path: 'alumni-management',
        loadChildren: () =>
          import(
            '../../administration/alumnus-management/alumnus-management.module'
          ).then((m) => m.AlumnusManagementModule),
      },
      {
        path: 'articles-management',
        loadChildren: () =>
          import(
            '../../administration/article-management/article-management.module'
          ).then((m) => m.ArticleManagementModule),
      },
      {
        path: 'teachers-management',
        loadChildren: () =>
          import(
            '../../administration/teacher-management/teacher-management.module'
          ).then((m) => m.TeacherManagementModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDashboardLayoutRoutingModule {}
