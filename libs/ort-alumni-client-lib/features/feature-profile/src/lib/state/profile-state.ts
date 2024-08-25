import { FormInterface } from '@features/feature-form';
import { cloneDeep, cloneable } from '@utils/util-tools';
import { BehaviorSubject, Observable } from 'rxjs';
import { NavigationType } from '@features/feature-navigation';
import { ProfileStateType } from './profile-state-type';
import { Injectable } from '@angular/core';

export class ProfileState {
  readonly NAGN_DATA: NavigationType;
  readonly GROUPS: FormInterface[];
  readonly INITIAL_ACTIVE: FormInterface;
  private _activateGroup: BehaviorSubject<FormInterface>;
  activateGroup$: Observable<FormInterface>;

  constructor(initialConfig: ProfileStateType) {
    this.NAGN_DATA = initialConfig.NavigationData;
    this.GROUPS = initialConfig.groups;
    //להוריד את התנאי לאחר מימוש מלא של כלל הישויות והורדת הסימן שאלה מהאקטיב TODO :
    if (initialConfig.activeGroup) {
      const initial = this.findGroupByName(initialConfig.activeGroup);

      if (initial) {
        this.INITIAL_ACTIVE = initial;
        this._activateGroup = new BehaviorSubject(initial);
        this.activateGroup$ = this._activateGroup.asObservable();
      }
    }
  }
  getActive() {
    return this._activateGroup.getValue();
  }

  backToDefaultActive() {
    this._activateGroup.next(cloneDeep(this.INITIAL_ACTIVE));
  }

  setActiveGroupConfig(groupName: string) {
    const theActive = this.findGroupByName(groupName);
    if (theActive) this._activateGroup.next(theActive);
  }

  private findGroupByName(groupName: string): FormInterface | null {
    const newActivating = this.GROUPS.filter(
      (group) => group.groupName === groupName
    );

    if (newActivating) {
      const theActive = {...newActivating[0]};
      return theActive;
    }

    return null;
  }
}
