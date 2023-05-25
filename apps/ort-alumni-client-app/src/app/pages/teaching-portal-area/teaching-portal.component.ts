import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TeacherPortalQuery } from './state/teaching-portal.query';
import { TeachingPortalService } from './state/teaching-portal.service';
import { TeachingPortalModel } from './state/teaching-portal.types';

@Component({
  selector: 'app-teaching-portal',
  templateUrl: './teaching-portal.component.html',
  styleUrls: ['./teaching-portal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeachingPortalComponent implements OnInit {
  isLoading$: Observable<boolean>;
  viewModel$: Observable<TeachingPortalModel | undefined>;

  constructor(
    private teachingPortalService: TeachingPortalService,
    private teachingPortalQuery: TeacherPortalQuery
  ) {}

  ngOnInit(): void {
    this.isLoading$ = this.teachingPortalQuery.isLoading$;
    this.viewModel$ = this.teachingPortalQuery.selectVM$;
    this.teachingPortalService.InitializeTeachingPortal();
  }
}
