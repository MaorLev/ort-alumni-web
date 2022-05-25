import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { NgModule } from '@angular/core';
import { QuicklinkModule } from 'ngx-quicklink';
import { MatIconModule } from '@angular/material/icon';
import { SvgIconModule } from '@shared/ui';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, QuicklinkModule, MatIconModule, SvgIconModule],
  exports: [FooterComponent, QuicklinkModule]
})
export class FooterModule {}
