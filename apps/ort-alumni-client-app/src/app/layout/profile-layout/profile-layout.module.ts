import { CommonModule } from '@angular/common';
import { FooterModule } from '@ort-alumni/feature';
import { HeaderModule } from '@ort-alumni/feature';
import { NavBarModule } from '@ort-alumni/feature';
import { NgModule } from '@angular/core';
import { ProfileLayoutComponent } from './profile-layout.component';
import { ProfileLayoutRoutingModule } from './profile-layout.routing';
import { SideNavModule } from '@ort-alumni/feature';
import { QuicklinkModule } from 'ngx-quicklink';

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
