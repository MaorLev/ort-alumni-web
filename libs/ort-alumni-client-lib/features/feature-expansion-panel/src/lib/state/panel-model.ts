export interface PanelStep {
  index: number;
  disabled: boolean;
}
export interface PanelGroupSteps {
  steps: PanelStep[];
  activeIndex: number;
  lastActive: number;
  isWaiting?: boolean;
}

export const PaneInitialState: PanelGroupSteps = {
  steps: [{ index: 0, disabled: false }],
  activeIndex: 0,
  lastActive: 0,
  isWaiting: false
};