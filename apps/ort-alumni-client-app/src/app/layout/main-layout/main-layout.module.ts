// Angular Modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Application Specific Modules
import { MainLayoutRoutingModule } from './main-layout.routing';
import { MainLayoutComponent } from './main-layout.component';

// Layout Modules
import { NavBarModule } from '../common-layout/nav-bar/nav-bar.module';
import { FooterModule } from '../common-layout/footer/footer.module';
import { HeaderModule } from '../common-layout/header/header.module';
import { TopBarModule } from './../common-layout/top-bar/top-bar.module';


@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    MainLayoutRoutingModule,
    NavBarModule,
    FooterModule,
    RouterModule,
    HeaderModule,
    TopBarModule,
  ]
})
export class MainLayoutModule {}
