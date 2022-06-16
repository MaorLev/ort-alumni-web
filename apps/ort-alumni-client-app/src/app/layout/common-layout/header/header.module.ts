import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';
import { QuicklinkModule } from 'ngx-quicklink';


@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, QuicklinkModule],
  exports: [QuicklinkModule, HeaderComponent]
})
export class HeaderModule {}
