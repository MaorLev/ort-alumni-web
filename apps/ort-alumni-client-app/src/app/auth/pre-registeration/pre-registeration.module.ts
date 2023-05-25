import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreRegisterationComponent } from './pre-registeration.component';
import { UiButtonModule } from '@ui-components/ui-button';

@NgModule({
  declarations: [PreRegisterationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PreRegisterationComponent }]),
    UiButtonModule,
  ],
  exports: [PreRegisterationComponent],
})
export class PreRegisterationModule {}
