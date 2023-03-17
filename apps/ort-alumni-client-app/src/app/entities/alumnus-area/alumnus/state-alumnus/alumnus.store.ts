import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import produce from 'immer';
import { AlumnusModel } from './alumnus-model';


export type AlumnusState = {
  isAlumnusLoaded:boolean | undefined;
  alumnus:AlumnusModel | null
};

export function createInitialAlumnusState(): AlumnusState {
  return {
    isAlumnusLoaded : undefined,
    alumnus: null
  };
}


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'alumnus' , producerFn: produce })
export class AlumnusStore extends Store<AlumnusState> {
  constructor() {
    super(createInitialAlumnusState());
  }



}
