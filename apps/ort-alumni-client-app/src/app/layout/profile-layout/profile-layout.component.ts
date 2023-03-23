import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SessionQuery } from '../../auth/session/state/session.query';
import { AlumnusProfileNavigationData } from '../../pages/profiles/profile-alumnus-area/alumnus-profile-navigation-data';

import { EmployerProfileNavigationData } from '../../entities/employer-area/employer/state-employer/employer-profile-navigation-data';
import { StudentProfileNavigationData } from '../../entities/student/state-student/student-profile-navigation-data';


import { Link } from '../common-layout/nav-bar/link.interface';

@Component({
  selector: 'app-profile-layout',
  templateUrl: './profile-layout.component.html',
  styleUrls: ['./profile-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileLayoutComponent implements OnInit {
  roleName: string;

  routes: Link[];
  constructor(private sessionQuery: SessionQuery) {
    this.roleName = this.sessionQuery.getRole();
  }
  ngOnInit(): void {
    this.setEntity();
  }

  setEntity() {
    switch (this.roleName) {
      case 'Alumnus':
        this.routes = AlumnusProfileNavigationData;
        break;
      case 'Student':
        this.routes = StudentProfileNavigationData;
        break;
      case 'Employer':
        this.routes = EmployerProfileNavigationData;
        break;
      default:
        break;
    }
  }
}
