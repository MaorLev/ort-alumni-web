import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditTeacherComponent } from './edit-teacher.component';
import { RouterModule } from '@angular/router';
import { SideNavModule } from '../../../../layout/common-layout/side-nav/side-nav.module';
import { FeatureFormModule } from '@features/feature-form';
import { UiButtonModule } from '@ui-components/ui-button';
import { TeacherDetailModule } from '../teacher-detail/teacher-detail.module';
import { GlobalControlsConfigState } from '../../../global-state/global-controls-config-state';
import { EditTeacherFormData } from './edit-teacher-form-data.service';
import { EditTeacherActionHandler } from './edit-teacher-action-handler';
import { TeacherService } from '../state-teacher/teacher.service';
import { UiSpinnerModule } from '@ui-components/ui-spinner';


const profileTeacherFormState = {
  provide: GlobalControlsConfigState,
  useFactory: (teacher: EditTeacherFormData) =>
    new GlobalControlsConfigState(
      teacher.teacherControls(),
      new EditTeacherActionHandler()
    ),
  deps: [EditTeacherFormData],
};

@NgModule({
  declarations: [EditTeacherComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: EditTeacherComponent }]),
    FeatureFormModule,
    SideNavModule,
    UiButtonModule,
    TeacherDetailModule,
    UiSpinnerModule
  ],
  exports: [EditTeacherComponent],
  providers: [
    TeacherService,
    EditTeacherFormData,
    profileTeacherFormState,
  ],
})
export class EditTeacherModule {}
