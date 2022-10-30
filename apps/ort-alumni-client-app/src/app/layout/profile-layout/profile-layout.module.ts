import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { ProfileLayoutComponent } from './profile-layout.component';
import { ProfileLayoutRoutingModule } from './profile-layout.routing';

import { QuicklinkModule } from 'ngx-quicklink';
import { HeaderModule } from '../common-layout/header/header.module';
import { NavBarModule } from '../common-layout/nav-bar/nav-bar.module';
import { SideNavModule } from '../common-layout/side-nav/side-nav.module';
import { TopBarModule } from '../common-layout/top-bar/top-bar.module';

@NgModule({
  declarations: [ProfileLayoutComponent],
  imports: [
    CommonModule,
    QuicklinkModule,
    HeaderModule,
    NavBarModule,
    SideNavModule,
    ProfileLayoutRoutingModule,
    TopBarModule
  ],
  exports:[QuicklinkModule]
})
export class ProfileLayoutModule {}
