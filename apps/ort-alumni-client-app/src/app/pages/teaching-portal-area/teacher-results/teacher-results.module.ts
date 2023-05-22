import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherResultsComponent } from './teacher-results.component';
import { RouterModule } from '@angular/router';
import { IntroCardTeacherModule } from '../teaching-portal-features/intro-card-teacher/intro-card-teacher.module';
import { UiSpinnerModule } from '@ui-components/ui-spinner';
import { UiButtonModule } from '@ui-components/ui-button';

@NgModule({
  declarations: [TeacherResultsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: TeacherResultsComponent }]),
    IntroCardTeacherModule,
    UiSpinnerModule,
    UiButtonModule
  ],
})
export class TeacherResultsModule {}
