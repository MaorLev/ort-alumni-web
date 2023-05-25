import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { UiButtonModule } from '@ui-components/ui-button';
import { FeatureFormModule } from '@features/feature-form';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: LoginComponent }]),
    UiButtonModule,
    FeatureFormModule
  ],
  exports: [LoginComponent],
})
export class LoginModule {}
