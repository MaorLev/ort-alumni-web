import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Link } from './link.interface';
import { linkData } from './link.data';
import { SearchService } from '../../../pages/search-feature/state/search.service';
import { ModalInteface, searchConfig } from '@features/feature-modal';
import { MENU_TREE_MODAL } from './modal-menu.data';
import { SessionQuery } from '../../../auth/session/state/session.query';
import { filter, map, take } from 'rxjs';
// import { Observable, of } from 'rxjs';
// import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent implements OnInit {
  links: Link[] = linkData;
  modalData: ModalInteface = searchConfig;
  modalMenuTreeData: ModalInteface = MENU_TREE_MODAL;
  roleName: string;

  get RoleName(): string {
    return this.roleName;
  }
  set RoleName(name: string) {
    this.roleName = name;
  }
  constructor(
    private searchService: SearchService,
    public sessionQuery: SessionQuery // private cdr: ChangeDetectorRef
  ) {
    this.roleName = '';
  }
  ngOnInit(): void {
    this.sessionQuery.selectRole$.pipe(take(1)).subscribe((r) => {
      const rto = r ? r : '';
      switch (rto) {
        case 'Admin':
          this.initialPathAccountByRole(
            '/admin-dashboard-layout/admin-dashboard'
          );
          break;
        case 'Student':
          this.initialPathAccountByRole('/profile/profile-student');

          break;
        case 'Alumnus':
          this.initialPathAccountByRole('/profile/profile-alumnus');

          break;
        default:
          this.initialPathAccountByRole('/auth/login');

          break;
      }
    });
  }

  onOpenDialog() {
    // this.searchService.searchInThaWeb();
  }

  initialPathAccountByRole(path: string): void {
    const dt = {
      ...this.modalMenuTreeData.data,
      accountRoute: path,
    };

    this.modalMenuTreeData = { ...this.modalMenuTreeData, data: { ...dt } };
  }
  onSearch(output: any) {
    // console.log(output);
  }
}
