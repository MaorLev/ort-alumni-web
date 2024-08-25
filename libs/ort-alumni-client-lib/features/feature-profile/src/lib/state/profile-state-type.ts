import { FormInterface } from '@features/feature-form';
import { NavigationType } from '@features/feature-navigation';


export interface ProfileStateType {
  stateName: string;
  NavigationData: NavigationType;
  groups: FormInterface [];
  activeGroup:string;
}
