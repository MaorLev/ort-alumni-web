import { QuicklinkModule } from 'ngx-quicklink';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { UiIconModule } from '@ui-components/ui-icon';
@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    RouterModule,
    QuicklinkModule,
    MatButtonModule,
    UiIconModule,
  ],
  exports: [QuicklinkModule, ButtonComponent],
})
export class UiButtonModule {}
