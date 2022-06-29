import { SessionService } from './../../../auth/session/state/session.service';
import { Injectable } from '@angular/core';
import { Link } from '../nav-bar/link.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginLinksDataService {

  constructor(private authService:SessionService) { }

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
      order: 1,
      showIfLogin: false,
    }
  ]
  logout() {
    this.authService.logout();
  }
}
