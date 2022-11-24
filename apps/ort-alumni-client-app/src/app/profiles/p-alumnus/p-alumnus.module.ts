import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PAlumnusComponent } from './p-alumnus.component';
import { RouterModule } from '@angular/router';
import { SideNavModule } from '../../layout/common-layout/side-nav/side-nav.module';
import { FeatureFormModule } from '@features/feature-form';
import { PAlumnusFormData } from './state/p-alumnus-form-data.service';
import { PAlumnusActionHandler } from './state/p-alumnus-action-handler';
import { PGlobalFormState } from '../p-global-form-state';


@NgModule({
  declarations: [PAlumnusComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PAlumnusComponent }]),
    SideNavModule,
    FeatureFormModule
  ],
  exports: [PAlumnusComponent],
  providers: [
    PAlumnusFormData,
    {
      provide: PGlobalFormState,
      useFactory: (alumn: PAlumnusFormData) =>
        new PGlobalFormState(
          alumn.alumnusControls(),
          new PAlumnusActionHandler()
        ),
      deps: [PAlumnusFormData]
    }
  ]
})
export class PAlumnusModule {}
