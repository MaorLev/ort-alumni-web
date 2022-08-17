import { TopBarModule } from './../common-layout/top-bar/top-bar.module';
import { CommonModule } from '@angular/common';

import { MainLayoutComponent } from './main-layout.component';
import { MainLayoutRoutingModule } from './main-layout.routing';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { QuicklinkModule } from 'ngx-quicklink';
import { NavBarModule } from '../common-layout/nav-bar/nav-bar.module';
import { FooterModule } from '../common-layout/footer/footer.module';
import { HeaderModule } from '../common-layout/header/header.module';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    MainLayoutRoutingModule,
    QuicklinkModule,
    NavBarModule,
    FooterModule,
    RouterModule,
    HeaderModule,
    TopBarModule,
  ],
  exports: [QuicklinkModule],
})
export class MainLayoutModule {}
