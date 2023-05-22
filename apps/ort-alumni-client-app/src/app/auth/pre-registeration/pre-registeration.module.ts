import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreRegisterationComponent } from './pre-registeration.component';
import { UiButtonModule } from '@ui-components/ui-button';
// import { QuicklinkModule } from 'ngx-quicklink';

@NgModule({
  declarations: [PreRegisterationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PreRegisterationComponent }]),
    // QuicklinkModule,
    UiButtonModule,
  ],
  exports: [PreRegisterationComponent],
  // exports: [QuicklinkModule, PreRegisterationComponent],
})
export class PreRegisterationModule {}
