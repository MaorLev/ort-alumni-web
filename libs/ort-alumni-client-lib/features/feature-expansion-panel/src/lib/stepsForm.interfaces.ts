import { FormInterface } from "@features/feature-form";
import { ButtonAction } from '@ui-components/ui-button'


export interface StepContent {
  header: string;
  subheader?: string;
  content?: string;
  img?: string;
}
export interface StepHeader {
  title: string;
  description?: string;
  icon?: string;
}
export interface StepButtons {
  name: string;
  label: string;
  route?: string;
  role: ButtonAction;
  className?:string;
  skipLocationByRouting?:boolean;
  color: 'warn' | 'accent' | 'primary';
}
export interface StepPreference {
  expanded?: number;
  opend?: number;
  disabled?: boolean;
  hideToggle?: boolean;
}
export interface StepForm {
  stepName: string;
  order: number;
  preference?: StepPreference;
  stepHeader: StepHeader;
  stepGroupForm: FormInterface;
  stepContent: StepContent;
  stepButtons: StepButtons[];
}
export interface StepsFormContent {
  header: string;
  subheader?: string;
  content?: string;
  img?: string;
}
export interface StepsForm {
  groupStepsName: string;
  groupId: number;
  content: StepsFormContent;
  steps: StepForm[];
}
