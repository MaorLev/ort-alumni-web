// import { Injectable } from '@angular/core';
// import { ActiveState, EntityState, EntityStore, StoreConfig } from '@datorama/akita';
// import { EmployerModel } from './employer-model';

// export interface EmployerState extends EntityState<EmployerModel, string>, ActiveState {}

// export function createInitialEmployerState(): EmployerState {
//   return {
//     loading:false,
//     active:null
//   };
// }


// @Injectable({ providedIn: 'root' })
// @StoreConfig({ name: 'employer'})
// export class EmployerStore extends EntityStore<EmployerState> {
//   constructor() {
//     super(createInitialEmployerState());
//   }



// }
