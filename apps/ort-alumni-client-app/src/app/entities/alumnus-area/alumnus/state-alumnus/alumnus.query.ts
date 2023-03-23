import { Injectable } from '@angular/core';
import { Query, QueryEntity } from '@datorama/akita';
import { map, Observable } from 'rxjs';
import { AlumnusModel } from './alumnus-model';
import { AlumnusState, AlumnusStore } from './alumnus.store';

@Injectable({
  providedIn: 'root',
})
export class AlumnusQuery extends QueryEntity<AlumnusState> {
  constructor(protected override store: AlumnusStore) {
    super(store);
  }

  selectState$: Observable<AlumnusState | null> = this.select((state) => state);

  // selectAlumnus$: Observable<AlumnusModel | null> = this.selectState$.pipe(
  //   map((state) => (state ? state.alumnus : null))
  // );

  selectActiveAlumnus$: Observable<AlumnusModel | undefined> = this.selectActive();
  // isAlumnusLoaded$: Observable<boolean | undefined> = this.selectState$.pipe(
  //   map((state) => (state?.isAlumnusLoaded))
  // );
  isAlumnusLoaded$: Observable<boolean | undefined> = this.selectLoading();

  // getAlumnus() { return this.getValue().alumnus}
  getActiveAlumnus() { return this.getActive();}

  isAlumnusLoaded() { return this.getValue().loading}
}
