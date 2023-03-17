import { VaInputInterface } from "@features/feature-va-input";
import { ButtonAction } from "@ui-components/ui-button";

export interface FormInterface {
  groupName: string;
  buttons: buttons [];
  styleStructure?:'fullWidth' | 'style-grid';
  controls: Record<string, VaInputInterface>;
  controlsWidthClass?: string;
}
export interface buttons {
  label: string;
  type: 'button' | 'submit';
  className: string;
}