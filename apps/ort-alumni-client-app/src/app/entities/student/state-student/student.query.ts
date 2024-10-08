import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { StudentModel } from '../configs-student/student-model';
import { StudentState, StudentStore } from './student.store';

@Injectable()
export class StudentQuery extends QueryEntity<StudentState> {
  constructor(protected override store: StudentStore) {
    super(store);
  }

  selectState$: Observable<StudentState | null> = this.select((state) => state);


  selectActiveStudent$: Observable<StudentModel | undefined> = this.selectActive();
  selectStudents$: Observable<StudentModel [] | undefined> = this.selectAll();

  isStudentLoaded$: Observable<boolean | undefined> = this.selectLoading();

  getActiveStudent() { return this.getActive();}
  getActiveStudentId() { return this.getActive()?.id;}

  isStudentLoaded() { return this.getValue().loading}
}
