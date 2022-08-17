import { TopBarModule } from './../common-layout/top-bar/top-bar.module';

import { AuthLayoutComponent } from './auth-layout.component';
import { AuthLayoutRoutingModule } from './auth-layout.routing';
import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { QuicklinkModule } from 'ngx-quicklink';
import { HeaderModule } from '../common-layout/header/header.module';


@NgModule({
  declarations: [AuthLayoutComponent],
  imports: [
    CommonModule,
    HeaderModule,
    AuthLayoutRoutingModule,
    QuicklinkModule,
    TopBarModule
  ],
  exports:[QuicklinkModule]
})
export class AuthLayoutModule {}
