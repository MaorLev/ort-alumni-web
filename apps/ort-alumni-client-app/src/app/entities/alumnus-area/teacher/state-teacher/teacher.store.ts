import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import produce from 'immer';
import { TeacherModel } from './teacher-model';

export type TeacherState = {
  isTeacherLoaded:boolean | undefined;
  teacher:TeacherModel | null
};

export function createInitialTeacherState(): TeacherState {
  return {
    isTeacherLoaded : undefined,
    teacher: null
  };
}


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'teacher' , producerFn: produce })
export class TeacherStore extends Store<TeacherState> {
  constructor() {
    super(createInitialTeacherState());
  }



}
