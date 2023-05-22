import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FeatureProfileModule,
  ProfileAbstractDataState,
} from '@features/feature-profile';
import { ProfileStudentComponent } from './profile-student.component';
import { UiButtonModule } from '@ui-components/ui-button';
import { UiSpinnerModule } from '@ui-components/ui-spinner';
import { RouterModule } from '@angular/router';
import { StudentDetailModule } from '../../../entities/student/student-detail/student-detail.module';
import { StudentProfileDataState } from './state/student-profile-data-state.service';

@NgModule({
  declarations: [ProfileStudentComponent],
  imports: [
    CommonModule,
    UiButtonModule,
    UiSpinnerModule,
    FeatureProfileModule,
    StudentDetailModule,
    RouterModule.forChild([{ path: '', component: ProfileStudentComponent }]),
  ],
  providers: [
    { provide: ProfileAbstractDataState, useClass: StudentProfileDataState },
  ],
})
export class ProfileStudentModule {}
