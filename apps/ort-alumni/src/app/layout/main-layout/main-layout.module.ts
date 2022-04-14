import { CommonModule } from '@angular/common';
import { FooterModule } from '../shared/footer/footer.module';
import { HeaderModule } from './../shared/header/header.module';
import { MainLayoutComponent } from './main-layout.component';
import { MainLayoutRoutingModule } from './main-layout.routing';
import { NavBarModule } from '../shared/nav-bar/nav-bar.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    HeaderModule,
    NavBarModule,
    FooterModule,
    MainLayoutRoutingModule,
    RouterModule
  ],
  exports: []
})
export class MainLayoutModule {}
