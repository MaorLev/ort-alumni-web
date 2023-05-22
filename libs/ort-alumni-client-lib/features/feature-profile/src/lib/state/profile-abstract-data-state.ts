import { Injectable } from '@angular/core';
import { NavigationType } from '@features/feature-navigation';
import { FormInterface } from '@features/feature-form';
import { ProfileStateType } from './profile-state-type';


@Injectable()
export abstract class ProfileAbstractDataState {
  protected abstract readonly stateName: string;
  protected abstract readonly NavigationData: NavigationType;
  protected abstract readonly activeGroup: string;
  protected abstract readonly groups: FormInterface[];

  public abstract allInOneConfigs(): ProfileStateType ;

}
