import { SessionService } from '../../../auth/session/state/session.service';
import { Injectable } from '@angular/core';
import { Link } from '../nav-bar/link.interface';
import { AlertsService } from '@utils/util/core/central-message';

@Injectable({
  providedIn: 'root'
})
export class LoginLinksConfigService {

  constructor(private authService:SessionService, public alertService:AlertsService) { }

  readonly loginLinks:Link [] = [
    {
      label: 'התנתק',
      name: 'logout',
      route: '',
      onClick: () => this.logout(),
      order: 2,
      showIfLogin: true,
    },
    {
      label: 'התחבר',
      name: 'login',
      route: '/auth',
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      onClick: () => {},
      order: 1,
      showIfLogin: false,
    }
  ]
  logout() {
    this.authService.logout();
    this.alertService.dynamicAlert(`ביי ביי`);
  }
}
