import { StateService } from '@utils/util-tools';
import { map, Observable } from 'rxjs';
import {
  PanelActionHandler,
  PanelGroupSteps,
  PanelStep
} from './panel-action-handler';

export class PanelStateService extends StateService<PanelGroupSteps> {
  steps$: Observable<PanelStep[]>;
  activeStep$: Observable<PanelStep>;

  getActiveStep:PanelStep;
  getSteps: PanelStep[];
  constructor(
    initialState: PanelGroupSteps,
    actionHandler: PanelActionHandler
  ) {
    super(initialState, actionHandler);

    this.steps$ = this._state.pipe(
      map((state) => {
        this.getSteps = state.steps;
        return this.getSteps;
      })
    );
    this.activeStep$ = this._state.pipe(
      map((state) => {
        this.getActiveStep = state.steps[state.activeIndex];
        return this.getActiveStep;
      })
    );
  }

  specificStep(index: number): Observable<PanelStep> {
    return this._state.pipe(map((state) => state.steps[index]));
  }
}
