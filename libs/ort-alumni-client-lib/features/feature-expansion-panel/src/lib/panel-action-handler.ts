import { Action, ActionHandler } from '@utils/util-tools';
import { PanelActionType } from './feature-expansion-panel.component';
export interface PanelStep {
  index: number;
  disabled: boolean;
}
export interface PanelGroupSteps {
  steps: PanelStep[];
  activeIndex: number;
  lastActive: number ;
}
export class panelAction implements Action {
  type: string;
  data: PanelActionTypes;
}
export interface PanelActionTypes {
  index: number;
  length: number;
}
export class PanelActionHandler implements ActionHandler<PanelGroupSteps> {
  currentState: PanelGroupSteps;


  handleAction(
    currentState: PanelGroupSteps,
    action: panelAction
  ): PanelGroupSteps {
    this.currentState = currentState;
    switch (action.type) {
      case PanelActionType.Init:
        this.initial(action.data.length);
        break;
      case PanelActionType.ExcludeStep:
        this.excludeStep();
        break;
      case PanelActionType.setCurrentStep:
        this.setCurrentStep(action.data.index, this.currentState.activeIndex);
        break;
      case PanelActionType.nextStep:
        this.nextStep();
        break;
      case PanelActionType.prevStep:
        this.prevStep();
        break;
      case PanelActionType.setDisabledStep:
        this.setDisabledStep(action.data.index);
        break;
      case PanelActionType.rollBackDisabled:
        this.rollBackDisabled(action.data.index);
        break;
    }

    return this.currentState;
  }

  private rollBackDisabled(activeIndex: number) {
    this.setCurrentStep(activeIndex, this.currentState.activeIndex);
    const lastIndex = this.currentState.lastActive;
    if (activeIndex < lastIndex)
      for(let i = activeIndex+1; i <= lastIndex; i++){
        this.currentState.steps[i].disabled = true;
      }
  }

  private setDisabledStep(index: number) {
    this.currentState.steps[index].disabled = this.currentState.steps[index]
      .disabled
      ? false
      : true;
  }

  private nextStep() {
    const lastIndex = this.currentState.activeIndex;
    const index = this.setCurrentStep(lastIndex + 1, lastIndex);

    this.setDisabledStep(index);
  }
  private prevStep() {
    const index = this.currentState.activeIndex;
    this.setDisabledStep(index);
    this.setCurrentStep(index - 1, index);
  }

  private setCurrentStep(index: number, lastIndex:number): number {
    if (index < this.currentState.steps.length && index >= 0){
      this.currentState = { ...this.currentState, lastActive: lastIndex };
      this.currentState = { ...this.currentState, activeIndex: index };
    }

    return this.currentState.activeIndex;
  }

  private excludeStep(): void {
    for(let i = 0; i < this.currentState.steps.length; i++){
      this.currentState.steps[i].disabled = true;
    }
    this.currentState.steps[this.currentState.activeIndex].disabled = false;
  }

  private initial(length: number, index?: number): void {
    const steps: PanelStep[] = [];

    for (let i = 0; i < length; i++) {
      let step: PanelStep = {} as PanelStep;
      if (i === 0) step = { ...step, index: i, disabled: false };
      else step = { ...step, index: i, disabled: true };

      steps.push({ ...step });
    }

    this.currentState = { ...this.currentState, steps: [...steps] };
  }
}
