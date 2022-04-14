import { CommonModule } from '@angular/common';
import { FooterModule } from '../shared/footer/footer.module';
import { HeaderModule } from '../shared/header/header.module';
import { NavBarModule } from '../shared/nav-bar/nav-bar.module';
import { NgModule } from '@angular/core';
import { ProfileLayoutComponent } from './profile-layout.component';
import { ProfileLayoutRoutingModule } from './profile-layout.routing';
import { SideNavModule } from '../shared/side-nav/side-nav.module';

@NgModule({
  declarations: [ProfileLayoutComponent],
  imports: [
    CommonModule,
    HeaderModule,
    NavBarModule,
    FooterModule,
    SideNavModule,
    ProfileLayoutRoutingModule
  ]
})
export class ProfileLayoutModule {}
