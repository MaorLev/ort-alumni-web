import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { SessionQuery } from './state/session.query';
import { AlertsService } from '@utils/util/core/central-message';
import { ConstantsUsers } from '../../app-helpers/constants';
import { SessionStore } from './state/session.store';

@Injectable({
  providedIn: 'root',
})
export class SessionGurad implements CanLoad {
  constructor(
    private router: Router,
    private sessionQuery: SessionQuery,
    private sessionStore: SessionStore,
    private alerts: AlertsService
  ) {}

  canLoad(route: Route): boolean {
    if (this.sessionQuery.isTokenExist() && this.sessionQuery.isExpired()) {
      this.alerts.alertToken();
      this.router.navigateByUrl('auth/login');
      this.sessionStore.logout();
    }
    const userRole = this.sessionQuery.getRole();
    const path = route.path;
    const isLoggedIn = this.sessionQuery.isLoggedIn();

    // console.log(route.path);
    // console.log('is ADmin:', this.sessionQuery.isAdmin());
    // console.log('is Logged in:', this.sessionQuery.isLoggedIn());
    if (
      userRole === ConstantsUsers.ADMIN &&
      path === 'admin-dashboard-layout'
    ) {
      return true;
    } else if (!isLoggedIn && path === 'auth') {
      return true;
    } else if (isLoggedIn && path === 'profile') {
      if (userRole === ConstantsUsers.ADMIN) return false;
      return true;
    } else if (
      userRole === ConstantsUsers.ALUMNUS &&
      (path === 'register-teacher' ||
        path === 'profile-teacher' ||
        path === 'profile-alumnus')
    ) {
      return true;
    } else if (
      userRole === ConstantsUsers.STUDENT &&
      path === 'profile-student'
    ) {
      return true;
    }
    else if (

      path === 'articles'
    ) {
      return true;
    } else {
      this.router.navigateByUrl('**');
      return false;
    }
  }
}
