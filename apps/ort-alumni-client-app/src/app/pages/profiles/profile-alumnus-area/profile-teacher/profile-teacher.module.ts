import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureProfileModule, ProfileAbstractDataState } from '@features/feature-profile';
import { ProfileTeacherComponent } from './profile-teacher.component';
import { UiButtonModule } from '@ui-components/ui-button';

import { RouterModule } from '@angular/router';
import { UiSpinnerModule } from '@ui-components/ui-spinner';
// import { TeacherProfileDataState } from './state/teacher-profile-data-state.service';
import { TeacherDetailModule } from '../../../../entities/alumnus-area/teacher/teacher-detail/teacher-detail.module';

@NgModule({
  declarations: [ProfileTeacherComponent],
  imports: [
    CommonModule,
    FeatureProfileModule,
    UiButtonModule,
    UiSpinnerModule,
    TeacherDetailModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProfileTeacherComponent,
      },
    ]),
  ],
  // providers: [
  //   {provide: ProfileAbstractDataState, useClass: TeacherProfileDataState}
  // ],
})
export class ProfileTeacherModule {}
