import { Action, ActionHandler } from '@utils/util-tools';
import { ConfigControlsStateType } from '../../../../layout/profile-layout/config-controls-state.type';


export class EditAlumnusActionHandler
  implements ActionHandler<ConfigControlsStateType>
{
  handleAction(
    currentState: ConfigControlsStateType,
    action: Action
  ): ConfigControlsStateType {
    //Example usage
    // if (action.type === 'add') {
    //   alert('add');
    //   return {} as ProfileAreaConfigType;
    // }
    return currentState;
  }
}
