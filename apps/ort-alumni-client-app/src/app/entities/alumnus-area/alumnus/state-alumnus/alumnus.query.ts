import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { map, Observable } from 'rxjs';
import { AlumnusModel } from './alumnus-model';
import { AlumnusState, AlumnusStore } from './alumnus.store';

@Injectable({
  providedIn: 'root',
})
export class AlumnusQuery extends Query<AlumnusState> {
  constructor(protected override store: AlumnusStore) {
    super(store);
  }

  selectState$: Observable<AlumnusState | null> = this.select((state) => state);

  selectAlumnus$: Observable<AlumnusModel | null> = this.selectState$.pipe(
    map((state) => (state ? state.alumnus : null))
  );

  isAlumnusLoaded$: Observable<boolean | undefined> = this.selectState$.pipe(
    map((state) => (state?.isAlumnusLoaded))
  );

  getAlumnus() { return this.getValue().alumnus}

  isAlumnusLoaded() { return this.getValue().isAlumnusLoaded}
}
