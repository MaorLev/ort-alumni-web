import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProfileSubmittedType } from '@features/feature-profile';
import { AlertsService } from '@utils/util/core/central-message';
import { Observable, Subject, takeUntil } from 'rxjs';
import { StudentModel } from '../configs-student/student-model';
import { StudentQuery } from '../state-student/student.query';
import { StudentService } from '../state-student/student.service';

@Injectable()
export abstract class AbstractEditStudentService {
  protected abstract studentId: string;
  protected abstract onDestroy$: Subject<void>;
  protected abstract student$: Observable<StudentModel | undefined>;
  private currentDataStudent: StudentModel | undefined;

  constructor(
    private alerts: AlertsService,
    public studentQuery: StudentQuery,
    public service: StudentService
  ) {}

  onSubmit({ group: formGroup }: ProfileSubmittedType) {
    this.currentDataStudent = this.studentQuery.getActiveStudent();
    if (this.currentDataStudent && formGroup.valid)
      this.onUpdateStudent(formGroup);
  }
  private onUpdateStudent(group: FormGroup) {
    this.currentDataStudent = {
      ...this.currentDataStudent,
      ...group.value,
    };
    this.service
      .updateStudent(
        this.studentId,
        this.currentDataStudent as StudentModel
      )
      .pipe(takeUntil(this.onDestroy$))
      .subscribe();
  }

  onDeleteStudent() {
    this.service
      .deleteStudent(this.studentId)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => {
        this.alerts.dynamicAlert('פרופיל בוגר הוסר בהצלחה');
      });
  }
}
