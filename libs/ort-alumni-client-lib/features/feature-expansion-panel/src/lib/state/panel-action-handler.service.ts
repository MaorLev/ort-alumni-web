import { ActionHandler } from '@utils/util-tools';
import { PanelActionType } from './panel-action-type.enum';
import { panelAction } from './panel-action.types';
import { PanelGroupSteps, PanelStep } from './panel-model';

export class PanelActionHandler implements ActionHandler<PanelGroupSteps> {
  currentState: PanelGroupSteps;

  handleAction(
    currentState: PanelGroupSteps,
    action: panelAction
  ): PanelGroupSteps {
    this.currentState = currentState;
    switch (action.type) {
      case PanelActionType.Init:
        this.initial(action.data.length, action.data.index);
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
      case PanelActionType.disabledAll:
        this.disabledAll();
        break;
      case PanelActionType.waitingMode:
        this.updateWaitingMode();
        break;
    }

    return this.currentState;
  }

  private updateWaitingMode() {
    const isWaiting = this.currentState.isWaiting ? false : true;
    this.currentState.isWaiting = isWaiting;
    this.currentState.steps[this.currentState.activeIndex].disabled = isWaiting;
  }
  private rollBackDisabled(newActiveIndex: number) {
    this.setCurrentStep(newActiveIndex, this.currentState.activeIndex);
    const lastIndex = this.currentState.lastActive;
    if (newActiveIndex < lastIndex)
      for (let i = newActiveIndex + 1; i <= lastIndex; i++) {
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

  private setCurrentStep(index: number, lastIndex: number): number {
    if (index < this.currentState.steps.length && index >= 0) {
      this.currentState = { ...this.currentState, lastActive: lastIndex };
      this.currentState = { ...this.currentState, activeIndex: index };
    }

    return this.currentState.activeIndex;
  }

  private excludeStep(): void {
    const activeIndex = this.currentState.activeIndex;
    this.currentState.steps.forEach(function (value, index) {
      value.disabled = true;
      if (index === activeIndex) value.disabled = false;
    });
  }
  private disabledAll(): void {
    this.currentState.steps.forEach(function (value) {
      value.disabled = true;
    });
    this.currentState = { ...this.currentState, isWaiting: true };
  }

  private initial(length: number, index?: number): void {
    const steps: PanelStep[] = [];
    for (let i = 0; i < length; i++) {
      let step: PanelStep = {} as PanelStep;
      if (i === index) {
        step = { ...step, index: i, disabled: false };
        this.currentState.activeIndex = index;
      } else step = { ...step, index: i, disabled: true };

      steps.push({ ...step });
    }
    this.currentState = { ...this.currentState, steps: [...steps] };
  }
}
