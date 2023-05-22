import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SessionQuery } from '../../auth/session/state/session.query';


import { EmployerProfileNavigationData } from '../../entities/employer-area/employer/state-employer/employer-profile-navigation-data';

import { AlumnusProfileNavigationData } from '../../pages/profiles/profile-alumnus-area/alumnus-profile-navigation-data';
import { StudentProfileNavigationData } from '../../pages/profiles/profile-student/state/student-profile-navigation-data';
import { RouteNavigationType } from '@features/feature-navigation';

@Component({
  selector: 'app-profile-layout',
  templateUrl: './profile-layout.component.html',
  styleUrls: ['./profile-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileLayoutComponent implements OnInit {
  roleName: string;

  routeTitle:string;
  routes: RouteNavigationType[];
  constructor(private sessionQuery: SessionQuery) {
    this.roleName = this.sessionQuery.getRole();
    this.routeTitle = '';
  }
  ngOnInit(): void {
    this.setEntity();
  }

  setEntity() {
    switch (this.roleName) {
      case 'Alumnus':
        this.routeTitle = 'בוגר';
        this.routes = AlumnusProfileNavigationData;
        break;
        case 'Student':
        this.routeTitle = 'סטודנט';
        this.routes = StudentProfileNavigationData;
        break;
        case 'Employer':
        this.routeTitle = 'מעסיק';
        this.routes = EmployerProfileNavigationData;
        break;
      default:
        break;
    }
  }
}
