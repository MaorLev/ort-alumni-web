import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { NgModule } from '@angular/core';
import { QuicklinkModule } from 'ngx-quicklink';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, QuicklinkModule],
  exports: [FooterComponent, QuicklinkModule]
})
export class FooterModule {}
