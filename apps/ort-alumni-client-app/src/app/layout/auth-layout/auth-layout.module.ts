
import { AuthLayoutComponent } from './auth-layout.component';
import { AuthLayoutRoutingModule } from './auth-layout.routing';
import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { QuicklinkModule } from 'ngx-quicklink';
import { FooterModule } from '../common-layout/footer/footer.module';
import { HeaderModule } from '../common-layout/header/header.module';
import { NavBarModule } from '../common-layout/nav-bar/nav-bar.module';

@NgModule({
  declarations: [AuthLayoutComponent],
  imports: [
    CommonModule,
    QuicklinkModule,
    HeaderModule,
    FooterModule,
    AuthLayoutRoutingModule,
    NavBarModule
  ],
  exports:[QuicklinkModule]
})
export class AuthLayoutModule {}
