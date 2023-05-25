import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { ButtonComponent } from './button.component';
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
  exports: [ButtonComponent],
})
export class UiButtonModule {}
