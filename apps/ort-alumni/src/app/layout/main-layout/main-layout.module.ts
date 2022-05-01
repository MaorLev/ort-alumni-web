import { CommonModule } from '@angular/common';
import { FooterModule } from '../shared/footer/footer.module';
import { MainLayoutComponent } from './main-layout.component';
import { MainLayoutRoutingModule } from './main-layout.routing';
import { NavBarModule } from '../shared/nav-bar/nav-bar.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../shared/header/header.module';


@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    NavBarModule,
    FooterModule,
    MainLayoutRoutingModule,
    RouterModule,
    HeaderModule
  ],
  exports: [],
})
export class MainLayoutModule {}
