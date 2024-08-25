import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertsService } from '@utils/util/core/central-message';
import { catchError, EMPTY, map, Observable, of, switchMap, tap } from 'rxjs';
import { ResponseMassege } from '../configs-teacher/response-massege.type';
import { TeacherDataService } from './teacher-data.service';
import { LogoInterface, TeacherModel } from '../configs-teacher/teacher-model';
import { TeacherStore } from './teacher.store';
import { SearchBarTeacherModel } from '../../../../pages/teaching-portal-area/teaching-portal-features/search-bar-teacher/state/search-bar-teacher.model';
import { Router } from '@angular/router';
import { SessionStore } from '../../../../auth/session/state/session.store';
@Injectable()
export class TeacherService {
  constructor(
    private teacherDataService: TeacherDataService,
    private store: TeacherStore,
    private alerts: AlertsService,
    private router: Router,
    private sessionStore: SessionStore
  ) {}

  clearState() {
    this.store.remove();
    this.store.setLoading(false);
  }

  searchAndLoadTeachers(
    pageIndex: number,
    pageSize: number,
    searchDetails: SearchBarTeacherModel
  ) {
    return this.teacherDataService
      .searchTeachers(pageIndex, pageSize, searchDetails)
      .pipe(
        map((teachers: TeacherModel[]) => {
          this.store.set(teachers);
          this.store.setLoading(true);

          return teachers;
        }),
        catchError((error) => {
          this.store.setLoading(false);
          return EMPTY;
        })
      );
  }
  loadTeacher(alumnusId: string) {
    return this.teacherDataService.getTeacherByAlumnus(alumnusId).pipe(
      map((teacher: TeacherModel) => {
        this.store.add(teacher);
        this.store.setLoading(true);
        this.store.setActive(teacher.id);
        return teacher;
      }),
      catchError((error) => {
        this.store.setLoading(false);
        return EMPTY;
      })
    );
  }
  loadTeachers() {
    return this.teacherDataService.getTeachers().pipe(
      map((teachers: TeacherModel[]) => {
        this.store.set(teachers);
        this.store.setLoading(true);

        return teachers;
      }),
      catchError((error) => {
        this.store.setLoading(false);
        return EMPTY;
      })
    );
  }

  createTeacher(teacher: TeacherModel, alumnusId: string): Observable<any> {
    return this.teacherDataService.createTeacher(teacher, alumnusId).pipe(
      switchMap(() => {
        return this.loadTeacher(alumnusId);
      })
    );
  }
  updateTeacher(alumnusId: string, teacher: TeacherModel): Observable<any> {
    return this.teacherDataService.updateTeacher(alumnusId, teacher).pipe(
      tap(() => {
        this.store.updateActive({ ...teacher });
        this.alerts.dynamicAlert('עודכן בהצלחה');
      })
    );
  }

  deleteTeacher(alumnusId: string, id:string): Observable<any> {
    return this.teacherDataService.deleteTeacher(alumnusId).pipe(
      tap(() => {

        this.store.remove(id);
        this.store.setActive(null);
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
          this.store.updateActive({ ...teacher });
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
        this.alerts.dynamicAlert(
          '.שגיאת מערכת: מחיקת תמונה לא התבצעה, אנא נסה מאוחר יותר'
        );
        return caught;
      }),
      tap((event) => {
        if (event.type === HttpEventType.Response) {
          teacher = { ...teacher, logo: null };
          this.store.updateActive({ ...teacher });
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
