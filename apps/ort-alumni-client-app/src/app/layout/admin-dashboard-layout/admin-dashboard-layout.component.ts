import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouteNavigationType } from '@features/feature-navigation';
import { AdminDashboardNavigationData } from './admin-dashboard-navigation-data';

@Component({
  selector: 'app-admin-dashboard-layout',
  templateUrl: './admin-dashboard-layout.component.html',
  styleUrls: ['./admin-dashboard-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminDashboardLayoutComponent {

  roleName: string;

  routeTitle:string;
  routes: RouteNavigationType[] = AdminDashboardNavigationData;
  constructor() {
    this.roleName = 'Admin';
  }


}
