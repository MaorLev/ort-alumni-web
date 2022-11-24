import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditAlumnusComponent } from './edit-alumnus.component';
import { RouterModule } from '@angular/router';
import { FeatureFormModule } from '@features/feature-form';

import { EditAlumnusFormData } from './edit-alumnus-form-data.service';

import { EditAlumnusActionHandler } from './edit-alumnus-action-handler';
import { SideNavModule } from 'apps/ort-alumni-client-app/src/app/layout/common-layout/side-nav/side-nav.module';
import { ProfileGlobalFormState } from 'apps/ort-alumni-client-app/src/app/entities/global-state/profile-global-form-state';



@NgModule({
  declarations: [EditAlumnusComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: EditAlumnusComponent }]),
    SideNavModule,
    FeatureFormModule
  ],
  exports: [EditAlumnusComponent],
  providers: [
    EditAlumnusFormData,
    {
      provide: ProfileGlobalFormState,
      useFactory: (alumn: EditAlumnusFormData) =>
        new ProfileGlobalFormState(
          alumn.alumnusControls(),
          new EditAlumnusActionHandler()
        ),
      deps: [EditAlumnusFormData]
    }
  ]
})
export class EditAlumnusModule {}
