import { Injectable } from '@angular/core';
import { ActiveState, EntityState, EntityStore, Store, StoreConfig } from '@datorama/akita';
import produce from 'immer';
import { AlumnusModel } from './alumnus-model';

export interface AlumnusState extends EntityState<AlumnusModel, string>, ActiveState {}
// export type AlumnusState = {
//   isAlumnusLoaded:boolean | undefined;
//   alumnus:AlumnusModel | null
// };

export function createInitialAlumnusState(): AlumnusState {
  return {
    loading:false,
    active:null
  };
}


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'alumnus'})
export class AlumnusStore extends EntityStore<AlumnusState> {
  constructor() {
    super(createInitialAlumnusState());
  }



}
