import { MatButtonModule } from '@angular/material/button';

import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '@shared/ui';
import { VAInputModule } from '@shared/feature';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    QuicklinkModule,
    RouterModule.forChild([{ path: '', component: LoginComponent }]),
    ReactiveFormsModule,
    VAInputModule,
    MatButtonModule,
    ButtonModule

  ],
  exports: [LoginComponent],
})
export class LoginModule {}
