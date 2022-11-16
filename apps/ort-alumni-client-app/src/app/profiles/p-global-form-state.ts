import { FormInterface } from '@features/feature-form';
import { ActionHandler, StateService } from '@utils/util-tools';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProfileAreaConfigType } from '../layout/profile-layout/profile-area.type';

export class PGlobalFormState extends StateService<ProfileAreaConfigType> {
  private _activateForm: BehaviorSubject<FormInterface>;

  activateForm$: Observable<FormInterface>;
  constructor(
    initialState: ProfileAreaConfigType,
    actionHandler: ActionHandler<ProfileAreaConfigType>
  ) {
    super(initialState, actionHandler);

    this._activateForm = new BehaviorSubject<FormInterface>(
      this._state.getValue().groups[0]
    );

    this.activateForm$ = this._activateForm.asObservable();
  }

  changeActive(groupName: string) {
    const newActivating = this._state
      .getValue()
      .groups.filter((group) => group.groupName === groupName);
    this._activateForm.next({ ...newActivating[0] });
  }
}
