import { CommonModule } from '@angular/common';
import { FooterModule } from '@ort-alumni/feature';
import { MainLayoutComponent } from './main-layout.component';
import { MainLayoutRoutingModule } from './main-layout.routing';
import { NavBarModule } from '@ort-alumni/feature';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '@ort-alumni/feature';
import { QuicklinkModule } from 'ngx-quicklink';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    QuicklinkModule,
    CommonModule,
    NavBarModule,
    FooterModule,
    MainLayoutRoutingModule,
    RouterModule,
    HeaderModule,
  ],
  exports: [QuicklinkModule,],
})
export class MainLayoutModule {}
