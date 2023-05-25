import { Injectable } from '@angular/core';
import { AlertsService } from '@utils/util/core/central-message';
import { catchError, EMPTY, map, Observable, tap } from 'rxjs';
import { StudentModel } from '../configs-student/student-model';
import { StudentDataService } from './student.data.service';
import { StudentStore } from './student.store';
import { Router } from '@angular/router';
import { SessionStore } from '../../../auth/session/state/session.store';

@Injectable()
export class StudentService {

  constructor(
    private studentDataService: StudentDataService,
    private store: StudentStore,
    private alerts: AlertsService,
    private router:Router,
    private sessionStore: SessionStore,
  ) {}

  loadStudent(studentId: string) {
    return this.studentDataService.getStudent(studentId).pipe(
      map((student:StudentModel) => {
        this.store.add(student, { loading: true });
        this.store.setActive(student.id);
        return student;
      }),
      catchError(()=>{
        this.store.setLoading(false);
        return EMPTY;
      }),
    );
  }
  createStudent(student: StudentModel): Observable<any> {
    return this.studentDataService.createStudent(student).pipe(
      tap(() => {
        this.store.add(student, { loading: true });
        this.store.setActive(student.id);
      })
    );
  }
  updateStudent(studentId: string, student: StudentModel): Observable<any> {
    return this.studentDataService.updateStudent(studentId, student).pipe(
      tap(() => {
        this.store.updateActive({...student});
        this.alerts.dynamicAlert('עודכן בהצלחה');
      })
    );
  }

  deleteStudent(studentId: string): Observable<any> {
    return this.studentDataService.deleteStudent(studentId).pipe(
      tap(() => {
        this.store.remove(studentId);
        this.store.setLoading(false);
        this.store.setActive(null);
        this.sessionStore.logout();
        this.router.navigate(['/']);
      })
    );
  }
}
