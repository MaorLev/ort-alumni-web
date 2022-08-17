import { ortInput } from "@features/feature-va-input";

export interface FormInterface {
  groupName: string;
  buttons: buttons [];
  controls: Record<string, ortInput>;
}
export interface buttons {
  label: string;
  type: 'button' | 'submit';
  className: string;
}