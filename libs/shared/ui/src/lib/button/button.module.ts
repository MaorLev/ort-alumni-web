import { MatIconModule } from '@angular/material/icon';
import { QuicklinkModule } from 'ngx-quicklink';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, QuicklinkModule, MatButtonModule, RouterModule,  MatIconModule],
  exports: [QuicklinkModule, ButtonComponent],
})
export class ButtonModule {}
