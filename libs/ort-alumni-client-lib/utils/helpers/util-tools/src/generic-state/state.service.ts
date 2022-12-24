import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { cloneable } from '../util-deep-copy/clone-deep';
import { Action, ActionHandler } from './action.types';

export class StateService<T> {
  protected _state: BehaviorSubject<T>;

  subs: Subscription;
  actions$: BehaviorSubject<Action>;

  state$: Observable<T>;
  constructor(initialState: T, actionHandler: ActionHandler<T>) {
    this._state = new BehaviorSubject(initialState);
    this.actions$ = new BehaviorSubject({ type: 'null' });

    this.subs = this.actions$.subscribe((action) => {
      const nextState = actionHandler.handleAction(
        this._state.getValue(),
        action
      );
      const newObject = cloneable.deepCopy(nextState);
      this._state.next(newObject);
    });
    this.state$ = this._state.asObservable();
  }
}
