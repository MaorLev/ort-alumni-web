import { Action, ActionHandler } from "@utils/util-tools";
import { ConfigControlsStateType } from "apps/ort-alumni-client-app/src/app/layout/profile-layout/config-controls-state.type";

export class EditTeacherActionHandler
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
