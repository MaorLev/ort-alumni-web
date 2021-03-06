import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { NgModule } from '@angular/core';
import { QuicklinkModule } from 'ngx-quicklink';
import { UiIconModule } from '@ui-components/ui-icon';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, QuicklinkModule, UiIconModule],
  exports: [QuicklinkModule, FooterComponent ]
})
export class FooterModule {}
