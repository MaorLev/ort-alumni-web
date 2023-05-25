import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LayoutTeachingPortalComponent } from './layout-teaching-portal.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutTeachingPortalComponent,
    children: [

      { path: '', redirectTo: 'teaching-portal', pathMatch: 'full' },
      {
        path: 'teaching-portal',
        loadChildren: () =>
          import('../../pages/teaching-portal-area/teaching-portal-area.module').then((m) => m.TeachingPortalAreaModule),
      },
      {
        path: 'teacher-results',
        loadChildren: () =>
          import('../../pages/teaching-portal-area/teacher-results/teacher-results.module').then((m) => m.TeacherResultsModule),
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutTeachingPortalRoutingModule {}
