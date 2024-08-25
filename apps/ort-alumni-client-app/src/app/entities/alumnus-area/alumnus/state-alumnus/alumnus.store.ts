import { Injectable } from '@angular/core';
import { ActiveState, EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { AlumnusModel } from '../configs-alumnus/alumnus-model';

export interface AlumnusState extends EntityState<AlumnusModel, string>, ActiveState {}

export function createInitialAlumnusState(): AlumnusState {
  return {
    loading:false,
    active:null
  };
}


@Injectable()
@StoreConfig({ name: 'alumnus'})
export class AlumnusStore extends EntityStore<AlumnusState> {
  constructor() {
    super(createInitialAlumnusState());
  }


  setEntityActive(id: string) {
    this.setActive(id);
  }

}
