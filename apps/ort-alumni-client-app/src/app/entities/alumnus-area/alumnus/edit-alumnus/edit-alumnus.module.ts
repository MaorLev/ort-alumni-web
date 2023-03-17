import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditAlumnusComponent } from './edit-alumnus.component';
import { RouterModule } from '@angular/router';
import { FeatureFormModule } from '@features/feature-form';

import { EditAlumnusFormData } from './edit-alumnus-form-data.service';

import { EditAlumnusActionHandler } from './edit-alumnus-action-handler';
import { SideNavModule } from '../../../../layout/common-layout/side-nav/side-nav.module';
import { ProfileGlobalFormState } from '../../../global-state/profile-global-form-state';
import { UiSpinnerModule } from '@ui-components/ui-spinner';

import { UiButtonModule } from '@ui-components/ui-button';
import { AlumnusDetailModule } from '../alumnus-detail/alumnus-detail.module';
import { AlumnusService } from '../state-alumnus/alumnus.service';

const profileAlumnusFormState = {
  provide: ProfileGlobalFormState,
  useFactory: (alumnus: EditAlumnusFormData) =>
    new ProfileGlobalFormState(
      alumnus.alumnusControls(),
      new EditAlumnusActionHandler()
    ),
  deps: [EditAlumnusFormData],
};


@NgModule({
  declarations: [EditAlumnusComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: EditAlumnusComponent }]),
    SideNavModule,
    FeatureFormModule,
    UiSpinnerModule,
    AlumnusDetailModule,
    UiButtonModule,
  ],
  exports: [EditAlumnusComponent],
  providers: [
    AlumnusService,
    EditAlumnusFormData,
    profileAlumnusFormState,
  ],

})
export class EditAlumnusModule {}
