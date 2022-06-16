import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { ProfileLayoutComponent } from './profile-layout.component';
import { ProfileLayoutRoutingModule } from './profile-layout.routing';

import { QuicklinkModule } from 'ngx-quicklink';
import { HeaderModule } from '../common-layout/header/header.module';
import { NavBarModule } from '../common-layout/nav-bar/nav-bar.module';
import { FooterModule } from '../common-layout/footer/footer.module';
import { SideNavModule } from '../common-layout/side-nav/side-nav.module';

@NgModule({
  declarations: [ProfileLayoutComponent],
  imports: [
    CommonModule,
    QuicklinkModule,
    HeaderModule,
    NavBarModule,
    FooterModule,
    SideNavModule,
    ProfileLayoutRoutingModule,
  ],
  exports:[QuicklinkModule]
})
export class ProfileLayoutModule {}
