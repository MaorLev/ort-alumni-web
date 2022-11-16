import { Action, ActionHandler } from '@utils/util-tools';
import { ProfileAreaConfigType } from '../../../layout/profile-layout/profile-area.type';

export class PAlumnusActionHandler
  implements ActionHandler<ProfileAreaConfigType>
{
  handleAction(
    currentState: ProfileAreaConfigType,
    action: Action
  ): ProfileAreaConfigType {
    //Example usage
    // if (action.type === 'add') {
    //   alert('add');
    //   return {} as ProfileAreaConfigType;
    // }
    return currentState;
  }
}
