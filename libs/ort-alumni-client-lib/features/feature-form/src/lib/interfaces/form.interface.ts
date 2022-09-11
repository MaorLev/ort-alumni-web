import { VaInputInterface } from "@features/feature-va-input";

export interface FormInterface {
  groupName: string;
  buttons: buttons [];
  controls: Record<string, VaInputInterface>;
}
export interface buttons {
  label: string;
  type: 'button' | 'submit';
  className: string;
}