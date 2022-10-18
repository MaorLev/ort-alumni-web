import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { createInitialStateStudent, StudentsState } from './student.model';




@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'students' })
export class StudentStore extends EntityStore<StudentsState> {

  constructor() {
    super(createInitialStateStudent());
  }

}
