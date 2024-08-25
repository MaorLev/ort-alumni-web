import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherManagementComponent } from './teacher-management.component';
import { SearchBarTeacherModule } from '../../pages/teaching-portal-area/teaching-portal-features/search-bar-teacher/search-bar-teacher.module';
import { FeatureTableModule } from '@features/feature-table';
import { UiButtonModule } from '@ui-components/ui-button';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TeacherManagementComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: TeacherManagementComponent }]),
    SearchBarTeacherModule,
    FeatureTableModule,
    UiButtonModule
  ]
})
export class TeacherManagementModule { }
