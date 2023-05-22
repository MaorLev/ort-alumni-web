import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureProfileModule, ProfileAbstractDataState } from '@features/feature-profile';
import { ProfileAlumnusComponent } from './profile-alumnus.component';
import { RouterModule } from '@angular/router';
import { UiButtonModule } from '@ui-components/ui-button';
import { UiSpinnerModule } from '@ui-components/ui-spinner';
import { AlumnusDetailModule } from '../../../../entities/alumnus-area/alumnus/alumnus-detail/alumnus-detail.module';
import { AlumnusProfileDataState } from './state/alumnus-profile-data-state.service';

@NgModule({
  declarations: [ProfileAlumnusComponent],
  imports: [
    CommonModule,
    UiButtonModule,
    UiSpinnerModule,
    FeatureProfileModule,
    UiButtonModule,
    AlumnusDetailModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProfileAlumnusComponent,
      },
    ]),
  ],
  providers: [
    {
      provide: ProfileAbstractDataState,
      useClass: AlumnusProfileDataState,
    },
  ],
})
export class ProfileAlumnusModule {}
