import { VaFormInputInterface } from "@utils/core/global-interfaces";


export interface FormInterface {
  groupName: string;
  buttons: buttons [];
  styleStructure?:'fullWidth' | 'style-grid';
  controls: Record<string, VaFormInputInterface>;
  controlsWidthClass?: string;
}
export interface buttons {
  label: string;
  type: 'button' | 'submit';
  className: string;
}