import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { StaticEntitiesDataState } from './static-entities-data-state-model';


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'staticData' })
export class StaticEntitiesDataStore extends EntityStore<StaticEntitiesDataState> {
  constructor() {
    super();
  }
}