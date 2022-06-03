import { ButtonModule } from '@shared/ui';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetPasswordComponent } from './reset-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule, VAInputModule } from '@shared/feature';


@NgModule({
  declarations: [ResetPasswordComponent],
  imports: [
    CommonModule,
    QuicklinkModule,
    RouterModule.forChild([{ path: '', component: ResetPasswordComponent }]),
    ReactiveFormsModule,
    VAInputModule,
    ButtonModule,
    FileUploadModule

  ],
  exports: [ResetPasswordComponent, QuicklinkModule],
})
export class ResetPasswordModule {}
