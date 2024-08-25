import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardLayoutComponent } from './admin-dashboard-layout.component';
import { AdminDashboardLayoutRoutingModule } from './admin-dashboard-layout.routing';
import { TopBarModule } from '../common-layout/top-bar/top-bar.module';
import { FeatureNavigationModule } from '@features/feature-navigation';
import { HeaderModule } from '../common-layout/header/header.module';

@NgModule({
  declarations: [AdminDashboardLayoutComponent],
  imports: [
    CommonModule,
    AdminDashboardLayoutRoutingModule,
    TopBarModule,
    FeatureNavigationModule,
    HeaderModule,
  ],
})
export class AdminDashboardLayoutModule {}
