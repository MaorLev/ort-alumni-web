import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertsService } from '@utils/util/core/central-message';
import { catchError, EMPTY, map, Observable, of, switchMap, tap } from 'rxjs';
import { ResponseMassege } from './response-massege.type';
import { TeacherDataService } from './teacher-data.service';
import { LogoInterface, TeacherModel } from './teacher-model';
import { TeacherStore } from './teacher.store';

@Injectable()
export class TeacherService {
  constructor(
    private teacherDataService: TeacherDataService,
    private store: TeacherStore,
    private alerts: AlertsService
  ) {}

  loadTeacher(alumnusId: string) {
    return this.teacherDataService.getTeacherByAlumnus(alumnusId).pipe(
      map((teacher:TeacherModel) => {
        this.store.update({ teacher: teacher, isTeacherLoaded: true });
        return teacher;
      }),
      catchError(()=>{
        this.store.update({ isTeacherLoaded: false });
        return EMPTY;
      }),
    );
  }
  createTeacher(teacher: TeacherModel, alumnusId: number): Observable<any> {
    return this.teacherDataService.createTeacher(teacher, alumnusId).pipe(
      tap(() => {
        this.store.update({ teacher: teacher, isTeacherLoaded: true });
      })
    );
  }
  updateTeacher(alumnusId: string, teacher: TeacherModel): Observable<any> {
    return this.teacherDataService.updateTeacher(alumnusId, teacher).pipe(
      tap(() => {
        this.store.update({ teacher: { ...teacher }, isTeacherLoaded: true });
        this.alerts.dynamicAlert('עודכן בהצלחה');
      })
    );
  }

  deleteTeacher(alumnusId: string): Observable<any> {
    return this.teacherDataService.deleteTeacher(alumnusId).pipe(
      tap(() => {
        this.store.update({ teacher: null, isTeacherLoaded: false });
      })
    );
  }

  AddLogo(
    file: FormData,
    teacherId: string,
    teacher: TeacherModel
  ): Observable<HttpEvent<ResponseMassege>> {
    return this.teacherDataService.AddLogo(file, teacherId).pipe(
      tap((event) => {
        if (event.type === HttpEventType.Response) {
          teacher = { ...teacher, logo: event.body?.body as LogoInterface };
          this.store.update({ teacher: teacher });
          this.alerts.dynamicAlert('עודכן בהצלחה');
        }
      })
    );
  }
  deleteTeacherLogo(
    alumnusId: string,
    teacher: TeacherModel
  ): Observable<HttpEvent<any>> {
    return this.teacherDataService.deleteTeacherLogo(alumnusId).pipe(
      catchError((error, caught) => {
        console.log(error);
        console.log(caught);
        this.alerts.dynamicAlert(
          '.שגיאת מערכת: מחיקת תמונה לא התבצעה, אנא נסה מאוחר יותר'
        );
        return caught;
      }),
      tap((event) => {
        if (event.type === HttpEventType.Response) {
          teacher = { ...teacher, logo: null };
          this.store.update({ teacher: teacher });
          this.alerts.dynamicAlert('התמונה הוסרה בהצלחה');
        }
      })
    );
  }

  UpdateImage(
    logoToUpload: FormData,
    alumnusId: string,
    teacher: TeacherModel
  ): Observable<HttpEvent<ResponseMassege>> {
    return this.teacherDataService.deleteTeacherLogo(alumnusId).pipe(
      switchMap((httpEvent: HttpEvent<ResponseMassege>) => {
        if (httpEvent.type === HttpEventType.Response)
          return this.AddLogo(logoToUpload, alumnusId, teacher);
        else return of(httpEvent);
      })
    );
  }
}
