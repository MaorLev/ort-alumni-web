import { HttpEvent, HttpEventType } from '@angular/common/http';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { FormComponent, FormInterface } from '@features/feature-form';
import { ButtonAction } from '@ui-components/ui-button';
import { AlertsService } from '@utils/util/core/central-message';
import { SessionQuery } from 'apps/ort-alumni-client-app/src/app/auth/session/state/session.query';
import {
  BehaviorSubject,
  Observable,
  of,
  Subject,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs';
import { ProfileGlobalFormState } from '../../../global-state/profile-global-form-state';
import { TeacherModel } from '../state-teacher/teacher-model';
import { TeacherQuery } from '../state-teacher/teacher.query';
import { TeacherService } from '../state-teacher/teacher.service';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditTeacherComponent implements OnInit, OnDestroy {
  alumnusId: string;
  onDestroy$: Subject<void>;
  teacherModel$: Observable<TeacherModel | null>;
  activeForm$: Observable<FormInterface>;

  currentDataTeacher: TeacherModel | null;

  isEditMode: boolean;
  RequestIsDone: BehaviorSubject<boolean>;
  requestIsDone: Observable<boolean>;
  set IsEditMode(isEditMode: boolean) {
    this.isEditMode = isEditMode;
    if (!isEditMode) {
      this.state.backToDefaultActive();
    }
  }
  get IsEditMode() {
    return this.isEditMode;
  }
  constructor(
    public state: ProfileGlobalFormState,
    private sessionQuery: SessionQuery,
    public teacherQuery: TeacherQuery,
    private alerts: AlertsService,
    private service: TeacherService
  ) {
    this.onDestroy$ = new Subject<void>();
    this.IsEditMode = false;
  }

  ngOnInit(): void {
    this.alumnusId = this.sessionQuery.getUserId();
    if (!this.teacherQuery.isTeacherLoaded())
      this.service
        .loadTeacher(this.alumnusId)
        .pipe(takeUntil(this.onDestroy$))
        .subscribe();

    this.teacherModel$ = this.teacherQuery.selectTeacher$;
    this.activeForm$ = this.state.activateForm$;
    this.RequestIsDone = new BehaviorSubject<boolean>(false);
    this.requestIsDone = this.RequestIsDone.asObservable();
  }

  onActiveChange(groupName: string) {
    this.state.changeActive(groupName);
  }

  onSubmit(group: FormGroup) {
    this.currentDataTeacher = this.teacherQuery.getTeacher();

    if (this.currentDataTeacher && group.valid) {
      if (!(this.state.getActive().groupName === 'image-edit')) {
        this.onUpdateTeacher(group);
      } else {
        this.imageManager(group);
      }
    }
  }

  onUpdateTeacher(group: FormGroup) {
    this.currentDataTeacher = {
      ...this.currentDataTeacher,
      ...group.value,
    };
    this.service
      .updateTeacher(this.alumnusId, this.currentDataTeacher as TeacherModel)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => {
        this.RequestIsDone.next(true);
        this.RequestIsDone.next(false);
      });
  }
  onDeleteTeacher() {
    this.service
      .deleteTeacher(this.alumnusId)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => {
        this.alerts.dynamicAlert('כרטיס מורה הוסר בהצלחה');
      });
  }
  imageManager(group: FormGroup) {
    const logoBefore = this.currentDataTeacher?.logo;
    const logoToUpload = group.controls['logo']?.value;

    if (logoToUpload) {
      if (logoBefore) {
        //if is the same image that uploaded and button pressed without any action
        if (logoToUpload === logoBefore) return;
        this.onUpdateImage(logoToUpload);
      } else {
        this.onAddImage(logoToUpload);
      }
    } else {
      if (logoBefore) {
        this.onDeleteImage();
      }
    }
  }
  onUpdateImage(logoToUpload: FormData) {
    this.service
      .UpdateImage(
        logoToUpload,
        this.alumnusId,
        this.currentDataTeacher as TeacherModel
      )
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((event) => {
        if (event.type === HttpEventType.Response) {
          this.RequestIsDone.next(true);
          this.RequestIsDone.next(false);
        }
      });
  }
  onAddImage(logoToUpload: FormData): void {
    this.service
      .AddLogo(
        logoToUpload,
        this.alumnusId,
        this.currentDataTeacher as TeacherModel
      )
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((event) => {
        if (event.type === HttpEventType.Response) {
          this.RequestIsDone.next(true);
          this.RequestIsDone.next(false);
        }
      });
  }
  onDeleteImage(): void {
    this.service
      .deleteTeacherLogo(
        this.alumnusId,
        this.teacherQuery.getTeacher() as TeacherModel
      )
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((event) => {
        if (event.type === HttpEventType.Response) {
          this.RequestIsDone.next(true);
          this.RequestIsDone.next(false);
        }
      });
  }

  ngOnDestroy(): void {
    this.state.backToDefaultActive();
    this.state.subs.unsubscribe();
    this.onDestroy$.next();
  }
}
