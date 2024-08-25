import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProfileSubmittedType } from '@features/feature-profile';
import { AlertsService } from '@utils/util/core/central-message';
import { Observable, Subject, takeUntil } from 'rxjs';
import { TeacherModel } from '../configs-teacher/teacher-model';
import { TeacherQuery } from '../state-teacher/teacher.query';
import { TeacherService } from '../state-teacher/teacher.service';
import { SessionStore } from 'apps/ort-alumni-client-app/src/app/auth/session/state/session.store';
import { TeacherStore } from '../state-teacher/teacher.store';
import { Router } from '@angular/router';

@Injectable()
export abstract class AbstractEditTeacherService {
  abstract alumnusId: string;
  abstract onDestroy$: Subject<void>;
  abstract teacher$: Observable<TeacherModel | undefined>;

  private currentDataTeacher: TeacherModel | undefined;

  constructor(
    private alerts: AlertsService,
    public teacherQuery: TeacherQuery,
    public service: TeacherService,
    public sessionStore:SessionStore,
    public store:TeacherStore,
    public router:Router
  ) {
  }


  onSubmit({ group: formGroup, groupName }: ProfileSubmittedType) {
    this.currentDataTeacher = this.teacherQuery.getActiveTeacher();

    if (this.currentDataTeacher && formGroup.valid) {
      if (!(groupName === 'image-edit')) {
        this.onUpdateTeacher(formGroup);
      } else {
        this.imageManager(formGroup);
      }
    }
  }

  private onUpdateTeacher(group: FormGroup) {
    this.currentDataTeacher = {
      ...this.currentDataTeacher,
      ...group.value,
    };

    if(group.controls['cities'].disabled && this.currentDataTeacher) this.currentDataTeacher.cities = [];

    this.service
      .updateTeacher(this.alumnusId  , this.currentDataTeacher as TeacherModel)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe();
  }
  onDeleteTeacher(id:string) {
    this.service
      .deleteTeacher(this.alumnusId, id )
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => {
        this.store.setLoading(false);
        this.alerts.dynamicAlert('כרטיס מורה הוסר בהצלחה');
      });
  }
  private imageManager(group: FormGroup) {
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
  private onUpdateImage(logoToUpload: FormData) {
    this.service
      .UpdateImage(
        logoToUpload,
        this.alumnusId  ,
        this.currentDataTeacher as TeacherModel
      )
      .pipe(takeUntil(this.onDestroy$))
      .subscribe();
  }
  private onAddImage(logoToUpload: FormData): void {
    this.service
      .AddLogo(
        logoToUpload,
        this.alumnusId  ,
        this.currentDataTeacher as TeacherModel
      )
      .pipe(takeUntil(this.onDestroy$))
      .subscribe
      //   (event) => {
      //   if (event.type === HttpEventType.Response) {
      //   }
      // }
      ();
  }
  private onDeleteImage(): void {
    this.service
      .deleteTeacherLogo(
        this.alumnusId ,
        this.teacherQuery.getActiveTeacher() as TeacherModel
      )
      .pipe(takeUntil(this.onDestroy$))
      .subscribe();
  }
}
