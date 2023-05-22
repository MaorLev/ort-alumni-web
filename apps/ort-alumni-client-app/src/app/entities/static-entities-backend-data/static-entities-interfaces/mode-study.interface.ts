import { SimpleInterface } from "@features/va-chips-select";

export enum ModeStudyEnum {
  frontally = '1',
  online = '2',
}

export const ModeStudyMap: Record<number, string> = {
  [ModeStudyEnum.frontally]: 'פרונטלי',
  [ModeStudyEnum.online]: 'אונליין',
};

export interface ModeStudyInterface extends SimpleInterface {
  id: number;
  name: string;
}