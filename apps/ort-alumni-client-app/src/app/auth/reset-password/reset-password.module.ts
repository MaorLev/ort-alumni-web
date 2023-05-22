import { UiButtonModule } from '@ui-components/ui-button';
import { RouterModule } from '@angular/router';
// import { QuicklinkModule } from 'ngx-quicklink';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetPasswordComponent } from './reset-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FeatureVaInputModule } from '@features/feature-va-input';


@NgModule({
  declarations: [ResetPasswordComponent],
  imports: [
    CommonModule,
    // QuicklinkModule,
    RouterModule.forChild([{ path: '', component: ResetPasswordComponent }]),
    ReactiveFormsModule,
    FeatureVaInputModule,
    UiButtonModule

  ],
  // exports: [ResetPasswordComponent, QuicklinkModule],
  exports: [ResetPasswordComponent],
})
export class ResetPasswordModule {}
