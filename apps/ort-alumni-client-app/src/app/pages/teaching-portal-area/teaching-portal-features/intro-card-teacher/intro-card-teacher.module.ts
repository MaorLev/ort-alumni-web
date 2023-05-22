import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroCardTeacherComponent } from './intro-card-teacher.component';
import { UiMaterialCardModule } from '@ui-components/ui-material-card';
import { UiButtonModule } from '@ui-components/ui-button';
import { FeatureModalModule } from '@features/feature-modal';
import { ShowIfLoggedInDirectiveModule } from '../../../../auth/session/show-if-logged-in.directive';
@NgModule({
  declarations: [IntroCardTeacherComponent],
  imports: [CommonModule,UiMaterialCardModule, UiButtonModule, FeatureModalModule, ShowIfLoggedInDirectiveModule],
  exports: [IntroCardTeacherComponent],
})
export class IntroCardTeacherModule {}
