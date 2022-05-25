
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Link } from './link.interface';
import { navbar_logo } from './navbar-logo';
import { IImg } from '@shared/ui';
import { linkData } from './link.data';
import { SessionService } from '@ort-alumni/auth';

@Component({
  selector: 'alumni-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent {
  ort_logo: IImg = navbar_logo;

  links:Link [] = linkData;

  constructor(private authService:SessionService) {}


  logout() {
     this.authService.logout();
  }
}
