import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { TeacherModel } from '../configs-teacher/teacher-model';

import { TeacherState, TeacherStore } from './teacher.store';
@Injectable()
export class TeacherQuery extends QueryEntity<TeacherState> {
  constructor(protected override store: TeacherStore) {
    super(store);
  }
  selectAll$: Observable<TeacherModel [] | null> = this.selectAll();
  selectState$: Observable<TeacherState | null> = this.select((state) => state);


  selectActiveTeacher$: Observable<TeacherModel | undefined> = this.selectActive();

  isTeacherLoaded$: Observable<boolean | undefined> = this.selectLoading();

  getActiveTeacher() { return this.getActive();}


  isTeacherLoaded() { return this.getValue().loading}

}
