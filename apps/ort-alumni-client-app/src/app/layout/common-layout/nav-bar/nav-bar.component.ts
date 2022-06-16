import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Link } from './link.interface';
import { navbar_logo } from './navbar-logo';
import { IImg } from '@ui-components/ui-img';
import { linkData } from './link.data';
import { Observable } from 'rxjs';
import { SessionService } from '../../../auth/session/state/session.service';
import { SearchService } from '../../../pages/search-feature/state/search.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent {
  ort_logo: IImg = navbar_logo;

  links: Link[] = linkData;

  value: Observable<string>;

  constructor(
    private authService: SessionService,
    private searchService:SearchService
  ) {}

  onOpenDialog() {
    this.searchService.searchInThaWeb();
  }
  logout() {
    this.authService.logout();
  }
}
