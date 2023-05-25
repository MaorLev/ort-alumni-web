import { UiButtonModule } from '@ui-components/ui-button';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetPasswordComponent } from './reset-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FeatureVaInputModule } from '@features/feature-va-input';


@NgModule({
  declarations: [ResetPasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ResetPasswordComponent }]),
    ReactiveFormsModule,
    FeatureVaInputModule,
    UiButtonModule

  ],
  exports: [ResetPasswordComponent],
})
export class ResetPasswordModule {}
