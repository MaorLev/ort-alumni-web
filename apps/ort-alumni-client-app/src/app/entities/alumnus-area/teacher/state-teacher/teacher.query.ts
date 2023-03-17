import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { map, Observable } from 'rxjs';
import { TeacherModel } from './teacher-model';

import { TeacherState, TeacherStore } from './teacher.store';
@Injectable({
  providedIn: 'root',
})
export class TeacherQuery extends Query<TeacherState> {
  constructor(protected override store: TeacherStore) {
    super(store);
  }

  selectState$: Observable<TeacherState | null> = this.select((state) => state);

  selectTeacher$: Observable<TeacherModel | null> = this.selectState$.pipe(
    map((state) => (state ? state.teacher : null))
  );

  isTeacherLoaded$: Observable<boolean | undefined> = this.selectState$.pipe(
    map((state) => (state?.isTeacherLoaded))
  );

  getTeacher() { return this.getValue().teacher}

  isTeacherLoaded() { return this.getValue().isTeacherLoaded}
}
