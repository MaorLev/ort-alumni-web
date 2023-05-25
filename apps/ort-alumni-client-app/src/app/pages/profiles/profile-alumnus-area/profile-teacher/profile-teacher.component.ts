import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { TeacherQuery } from '../../../../entities/alumnus-area/teacher/state-teacher/teacher.query';
import { TeacherService } from '../../../../entities/alumnus-area/teacher/state-teacher/teacher.service';
import { SessionQuery } from '../../../../auth/session/state/session.query';
import { Observable, Subject, takeUntil } from 'rxjs';
import { AlertsService } from '@utils/util/core/central-message';
import { TeacherModel } from '../../../../entities/alumnus-area/teacher/configs-teacher/teacher-model';
import { AbstractEditTeacherService } from '../../../../entities/alumnus-area/teacher/edit-teacher/abstract-edit-teacher.service';

@Component({
  selector: 'app-profile-teacher',
  templateUrl: './profile-teacher.component.html',
  styleUrls: ['./profile-teacher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileTeacherComponent extends AbstractEditTeacherService implements OnInit, OnDestroy {
  alumnusId: string;

  onDestroy$: Subject<void>;
  teacher$: Observable<TeacherModel | undefined>;
  isEditMode: boolean;

  constructor(
    private sessionQuery: SessionQuery,
    teacherQuery: TeacherQuery,
    alerts: AlertsService,
    service: TeacherService
  ) {
    super(alerts, teacherQuery, service);
    this.onDestroy$ = new Subject<void>();
  }

  ngOnInit(): void {
    this.alumnusId = this.sessionQuery.getUserId();

    this.teacher$ = this.teacherQuery.selectActiveTeacher$;
      this.service
        .loadTeacher(this.alumnusId)
        .pipe(takeUntil(this.onDestroy$))
        .subscribe();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.service.clearState();
  }
}
