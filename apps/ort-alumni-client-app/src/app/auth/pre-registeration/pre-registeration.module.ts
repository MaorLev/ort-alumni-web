import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreRegisterationComponent } from './pre-registeration.component';
import { UiButtonModule } from '@ui-components/ui-button';
import { QuicklinkModule } from 'ngx-quicklink';

@NgModule({
  declarations: [PreRegisterationComponent],
  imports: [
    CommonModule,
    QuicklinkModule,
    RouterModule.forChild([{ path: '', component: PreRegisterationComponent }]),
    MatButtonModule, UiButtonModule
  ],
  exports: [QuicklinkModule, PreRegisterationComponent],
})
export class PreRegisterationModule {}
