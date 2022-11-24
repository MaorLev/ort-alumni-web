import { StateService } from '@utils/util-tools';
import { map, Observable } from 'rxjs';
import {
  PanelActionHandler
} from './panel-action-handler.service';
import { PanelGroupSteps, PanelStep } from './panel-model';

export class PanelStateService extends StateService<PanelGroupSteps> {
  steps$: Observable<PanelStep[]>;
  activeStep$: Observable<PanelStep>;

  constructor(
    initialState: PanelGroupSteps,
    actionHandler: PanelActionHandler
  ) {
    super(initialState, actionHandler);

    this.steps$ = this._state.pipe(map((state) => state.steps));

    this.activeStep$ = this._state.pipe(
      map((state) => state.steps[state.activeIndex])
    );
  }

  specificStep(index: number): Observable<PanelStep> {
    return this._state.pipe(map((state) => state.steps[index]));
  }
}
