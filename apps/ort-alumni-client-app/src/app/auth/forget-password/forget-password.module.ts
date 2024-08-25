import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgetPasswordComponent } from './forget-password.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FeatureVaInputModule } from '@features/feature-va-input';
import { UiButtonModule } from '@ui-components/ui-button';



@NgModule({
  declarations: [
    ForgetPasswordComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ForgetPasswordComponent }]),
    ReactiveFormsModule,
    FeatureVaInputModule,
    UiButtonModule
  ]
})
export class ForgetPasswordModule { }
