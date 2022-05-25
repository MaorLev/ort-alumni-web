import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreRegisterationComponent } from './pre-registeration.component';
import { ButtonModule } from '@shared/ui';

@NgModule({
  declarations: [PreRegisterationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PreRegisterationComponent }]),
    MatButtonModule, ButtonModule
  ],
  exports: [PreRegisterationComponent],
})
export class PreRegisterationModule {}
