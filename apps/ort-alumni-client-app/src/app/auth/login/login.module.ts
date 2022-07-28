import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UiButtonModule } from '@ui-components/ui-button';
import { FeatureVaInputModule } from '@features/feature-va-input';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    QuicklinkModule,
    RouterModule.forChild([{ path: '', component: LoginComponent }]),
    ReactiveFormsModule,
    FeatureVaInputModule,
    UiButtonModule,
  ],
  exports: [QuicklinkModule, LoginComponent],
})
export class LoginModule {}
