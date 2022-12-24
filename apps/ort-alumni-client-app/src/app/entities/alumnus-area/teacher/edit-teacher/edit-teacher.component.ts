import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormInterface } from '@features/feature-form';
import { AlertsService } from '@utils/util/core/central-message';
import { SessionQuery } from 'apps/ort-alumni-client-app/src/app/auth/session/state/session.query';
import { catchError, combineLatestWith, Observable, Subject, takeUntil, tap } from 'rxjs';
import { ProfileGlobalFormState } from '../../../global-state/profile-global-form-state';
import { TeacherDataService } from '../state-teacher/teacher-data.service';
import { TeacherModel } from '../state-teacher/teacher-model';
import { EditTeacherActionHandler } from './edit-teacher-action-handler';
import { EditTeacherFormData } from './edit-teacher-form-data.service';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    EditTeacherFormData,
    {
      provide: ProfileGlobalFormState,
      useFactory: (teacher: EditTeacherFormData) =>
        new ProfileGlobalFormState(
          teacher.teacherControls(),
          new EditTeacherActionHandler()
        ),
      deps: [EditTeacherFormData]
    }
  ]
})
export class EditTeacherComponent implements OnInit, OnDestroy  {
  alumnusId: string;
  onDestroy$: Subject<void>;
  teacherPatchAndConfigData: Observable<[TeacherModel, FormInterface]>;
  constructor(
    public state: ProfileGlobalFormState,
    private teacherData: TeacherDataService,
    private sessionQuery: SessionQuery,
    private alerts: AlertsService,
  ) {
    this.onDestroy$ = new Subject<void>();
  }

  ngOnInit(): void {
    this.alumnusId = this.sessionQuery.getUserId();
    // console.log("alumnusId by sessios", this.alumnusId);
    this.teacherPatchAndConfigData = this.teacherData
    .getTeacherByAlumnus(this.alumnusId)
    .pipe(combineLatestWith(this.state.activateForm$),
    tap(alum => {
      // console.log("Teacher From Server, Edit Area",alum);
    }));


    // ,catchError((error, caught) => {
    //   debugger;
    //   this.alerts.dynamicAlert("משתמש לא נמצא. באפשרותך להירשם כמורה באמצעות הכפתור מעלה.")
    //   return caught;
    // })
  }

  onActiveChange(groupName: string) {
    this.state.changeActive(groupName);
  }

  onSubmit(group: FormGroup) {
    if (group.valid)
      this.teacherData
        .updateTeacher(this.alumnusId, group.value)
        .pipe(takeUntil(this.onDestroy$))
        .subscribe(() => {
          this.alerts.dynamicAlert('עודכן בהצלחה');
        });
  }

  ngOnDestroy(): void {
    this.state.subs.unsubscribe();
    this.onDestroy$.next();
  }
}
