import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { UiButtonModule } from '@ui-components/ui-button';
import { FeatureFormModule } from '@features/feature-form';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    QuicklinkModule,
    RouterModule.forChild([{ path: '', component: LoginComponent }]),
    UiButtonModule,
    FeatureFormModule
  ],
  exports: [QuicklinkModule, LoginComponent],
})
export class LoginModule {}
