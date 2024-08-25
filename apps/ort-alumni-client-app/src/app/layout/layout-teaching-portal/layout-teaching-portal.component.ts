import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchBarRoutingDetails } from '../../pages/teaching-portal-area/teaching-portal-features/search-bar-teacher/search-bar-teacher.component';


@Component({
  selector: 'app-layout-teaching-portal',
  templateUrl: './layout-teaching-portal.component.html',
  styleUrls: ['./layout-teaching-portal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutTeachingPortalComponent {
  searchBarRoutingDetails:SearchBarRoutingDetails = {hasRouting:true,route:'/layout-teaching-portal/teacher-results'};
}
