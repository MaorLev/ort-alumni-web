import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { AlertsService } from '@utils/util/core/central-message';
import { Observable, Subject, takeUntil } from 'rxjs';
import { SessionQuery } from '../../../auth/session/state/session.query';
import { StudentModel } from '../../../entities/student/configs-student/student-model';
import { AbstractEditStudentService } from '../../../entities/student/edit-student/abstract-edit-student.service';
import { StudentQuery } from '../../../entities/student/state-student/student.query';
import { StudentService } from '../../../entities/student/state-student/student.service';
import { StudentStore } from '../../../entities/student/state-student/student.store';
import { Router } from '@angular/router';
import { SessionStore } from '../../../auth/session/state/session.store';

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileStudentComponent
  extends AbstractEditStudentService
  implements OnInit, OnDestroy
{
  studentId: string;

  isEditMode: boolean;
  onDestroy$: Subject<void>;
  student$: Observable<StudentModel | undefined>;


  constructor(
    private sessionQuery: SessionQuery,
    alerts: AlertsService,
    service: StudentService,
    studentStore: StudentStore,
    studentQuery: StudentQuery,
    router: Router,
    sessionStore: SessionStore
  ) {
    super(alerts, studentQuery,studentStore, service,router, sessionStore);
    this.onDestroy$ = new Subject<void>();
    this.isEditMode = false;
  }

  ngOnInit(): void {
    if(!this.sessionQuery.isAdmin())
    this.studentId = this.sessionQuery.getUserId();
    this.student$ = this.studentQuery.selectActive();
    if (!this.studentQuery.isStudentLoaded())
      this.service
        .loadStudent(this.studentId)
        .pipe(takeUntil(this.onDestroy$))
        .subscribe();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }
}
