import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import {  TeachingPortalState } from './teaching-portal.types';


export function createInitialTeacherPortalState(): TeachingPortalState {
  return {
    VMTeachingPortal: undefined,
    loading: false
  };
}

@Injectable()
@StoreConfig({ name: 'teaching-portal' })
export class TeachingPortalStore extends Store<TeachingPortalState> {
  constructor() {
    super(createInitialTeacherPortalState());
  }
}
