import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditTeacherComponent } from './edit-teacher.component';
import { RouterModule } from '@angular/router';
import { SideNavModule } from '../../../../layout/common-layout/side-nav/side-nav.module';
import { FeatureFormModule } from '@features/feature-form';
import { UiButtonModule } from '@ui-components/ui-button';

@NgModule({
  declarations: [EditTeacherComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: EditTeacherComponent }]),
    FeatureFormModule,
    SideNavModule,
    UiButtonModule
  ],
  exports: [EditTeacherComponent]

})
export class EditTeacherModule {}
