import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Link } from './link.interface';
import { NavBarService } from './nav-bar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent implements OnInit {
  links$!: Observable<Link[]>;
  constructor(private service: NavBarService) {}
  ngOnInit(): void {
    //remember change this true
    this.service.IsLogin(true);
    this.links$ = this.service.getLinks();
  }

  logout() {
    this.service.IsLogin(false);
  }
}
