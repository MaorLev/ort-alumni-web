export interface RegisterNavigationInterface {
  name: string;
  label:string;
  routeTo: string;
  styleClass: string;
}

export const REGISTER_NAVIGATION_DATA: RegisterNavigationInterface[] = [
  {
    name: 'student',
    label: 'סטודנט',
    routeTo: '../register-student',
    styleClass: 'custom fancy_btn'
  },
  {
    name: 'alumnus',
    label: 'בוגר',
    routeTo: '../register-alumnus',
    styleClass: 'custom fancy_btn'
  },
  {
    name: 'employer',
    label: 'מעסיק',
    routeTo: '../register-employer',
    styleClass: 'custom fancy_btn'
  },
];
