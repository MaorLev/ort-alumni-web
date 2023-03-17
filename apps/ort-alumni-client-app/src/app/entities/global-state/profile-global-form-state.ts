import { FormInterface } from '@features/feature-form';
import { ActionHandler, StateService } from '@utils/util-tools';
import { BehaviorSubject,  combineLatestWith, map, Observable } from 'rxjs';
import { ProfileAreaConfigType } from '../../layout/profile-layout/profile-area.type';



export interface ProfileConfigState {
  activeForm:FormInterface,
  configuration:ProfileAreaConfigType
}
export class ProfileGlobalFormState extends StateService<ProfileAreaConfigType> {
  private _activateForm: BehaviorSubject<FormInterface>;

  activateForm$: Observable<FormInterface>;

  theState$:Observable<ProfileConfigState>;

  constructor(
    initialState: ProfileAreaConfigType,
    actionHandler: ActionHandler<ProfileAreaConfigType>
  ) {
    super(initialState, actionHandler);

    this._activateForm = new BehaviorSubject<FormInterface>(
      this._state.getValue().groups[0]
    );

    this.activateForm$ = this._activateForm.asObservable();
    this.theState$ = this.state$.pipe(combineLatestWith(this._activateForm),map((res)=> {
      const configuration = res[0];
      const activeForm = res[1];
      const state = {activeForm, configuration};
      return state;
    }));
  }

  getActive(){
    return this._activateForm.getValue();
  }

  backToDefaultActive(){
    const newActivating = this._state
      .getValue()
      .groups[0];
      this._activateForm.next({ ...newActivating });
  }

  changeActive(groupName: string) {
    const newActivating = this._state
      .getValue()
      .groups.filter((group) => group.groupName === groupName);

    this._activateForm.next({ ...newActivating[0] });
  }
}
