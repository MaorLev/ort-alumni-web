import { Injectable } from '@angular/core';
import { ActiveState, EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { TeacherModel } from '../configs-teacher/teacher-model';

// export type TeacherState = {
//   isTeacherLoaded:boolean | undefined;
//   teacher:TeacherModel | null
// };

// export function createInitialTeacherState(): TeacherState {
//   return {
//     isTeacherLoaded : undefined,
//     teacher: null
//   };
// }

export interface TeacherState extends EntityState<TeacherModel, string>, ActiveState {}

export function createInitialTeacherState(): TeacherState {
  return {
    loading:undefined,
    active:null
  };
}

@Injectable()
@StoreConfig({ name: 'teacher' })
export class TeacherStore extends EntityStore<TeacherState> {
  constructor() {
    super(createInitialTeacherState());
  }



}
