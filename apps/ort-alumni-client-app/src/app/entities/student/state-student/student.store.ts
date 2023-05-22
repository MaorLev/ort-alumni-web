import { Injectable } from '@angular/core';
import { ActiveState, EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { StudentModel } from '../configs-student/student-model';

export interface StudentState extends EntityState<StudentModel, string>, ActiveState {}

export function createInitialStudentState(): StudentState {
  return {
    loading:false,
    active:null
  };
}


@Injectable()
@StoreConfig({ name: 'student'})
export class StudentStore extends EntityStore<StudentState> {
  constructor() {
    super(createInitialStudentState());
  }



}
