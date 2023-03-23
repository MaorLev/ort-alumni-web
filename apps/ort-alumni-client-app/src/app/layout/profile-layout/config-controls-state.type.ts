import { FormInterface } from '@features/feature-form';
import { NavigationType } from '../common-layout/side-nav/navigation-type';

export interface ConfigControlsStateType {
  profileName: string;
  NavigationData: NavigationType;
  groups: FormInterface [];
}
