import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Link } from './link.interface';
import { NavBarService } from './nav-bar.service';
import { navbar_logo } from './navbar-logo';
import { IImg } from '@shared/ui';
import { CONSTLINKS } from './const-links';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent implements OnInit {
  dynamic_links$: Observable<Link[]>;
  const_links:Link [] = CONSTLINKS;
  ort_logo: IImg = navbar_logo;

  constructor(private service: NavBarService) {}
  ngOnInit(): void {
    //remember change this true
    this.service.IsLogin(true);
    this.dynamic_links$ = this.service.getLinks();
  }

  logout() {
    this.service.IsLogin(false);
  }
}
