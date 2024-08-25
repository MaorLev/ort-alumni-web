/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { StepsForm } from '@features/feature-expansion-panel';
import { ButtonAction } from '@ui-components/ui-button';
import { StudentControls } from './student-controls';
import { StaticEntitiesDataQuery } from '../../static-entities-backend-data/static-entities-data.query';
import { SessionQuery } from '../../../auth/session/state/session.query';

@Injectable({ providedIn: 'root' })
export class StudentPanelDataConfig {
  isAdmin: boolean = this.sessionQuery.isAdmin();
  constructor(
    private staticEntitiesDataQuery: StaticEntitiesDataQuery,
    private sessionQuery: SessionQuery
  ) {}

  readonly studentForm: StepsForm = {
    groupStepsName: 'studentForm',
    groupId: 1,
    content: { header: 'רישום סטודנט' },
    steps: [
      {
        stepName: '',
        order: 1,
        stepHeader: { title: 'פרטי כניסה', description: '', icon: '' },
        stepContent: { header: '', subheader: '', content: '' },
        stepGroupForm: {
          groupName: '',
          buttons: [],
          styleStructure: 'style-grid',
          controls: {
            firstname: StudentControls.Firstname(),
            lastname: StudentControls.Lastname(),
            email: StudentControls.Email(),
            password: StudentControls.Password(),
          },
        },
        stepButtons: [
          {
            name: 'AgreeAndContinue',
            label: 'אשר והמשך',
            role: ButtonAction.StepSubmited,
            color: 'accent',
            className: 'mat-raised-button',
          },
        ],
      },

      {
        stepName: '',
        stepHeader: { title: 'פרטיים אישיים', description: '', icon: '' },
        order: 2,
        stepContent: { header: '', subheader: '', content: '' },
        stepGroupForm: {
          groupName: '',
          buttons: [],
          styleStructure: 'style-grid',
          controls: {
            phone: StudentControls.Phone(),
            dateofbirth: StudentControls.Dateofbirth(),
            cardid: StudentControls.Cardid(),
            city: StudentControls.City(
              this.staticEntitiesDataQuery.getCities()
            ),
          },
        },
        stepButtons: [
          {
            name: 'Preview',
            label: 'הקודם',
            role: ButtonAction.Prev,
            color: 'accent',
            className: 'mat-raised-button',
          },
          {
            name: 'AgreeAndContinue',
            label: 'אשר והמשך',
            role: ButtonAction.StepSubmited,
            color: 'accent',
            className: 'mat-raised-button',
          },
        ],
      },
      {
        stepName: '',
        order: 2,
        stepHeader: { title: 'פרטי מכללה', description: '', icon: '' },
        stepContent: { header: '', subheader: '', content: '' },
        stepGroupForm: {
          groupName: '',
          buttons: [],
          styleStructure: 'style-grid',
          controls: {
            college: StudentControls.College(
              this.staticEntitiesDataQuery.getColleges()
            ),
            studyprogram: StudentControls.Studyprogram(
              this.staticEntitiesDataQuery.getStudyPrograms()
            ),
            studystartyear: StudentControls.Studystartyear(),
          },
        },
        stepButtons: [
          {
            name: 'Preview',
            label: 'הקודם',
            role: ButtonAction.Prev,
            color: 'accent',
            className: 'mat-raised-button',
          },
          {
            name: 'Submit',
            label: 'סיימתי',
            role: ButtonAction.StepsSubmited,
            color: 'accent',
            className: 'mat-raised-button',
          },
        ],
      },
      {
        stepName: '',
        stepHeader: { title: 'סיום', description: '', icon: '' },
        order: 3,
        stepContent: {
          header: 'נרשמת בהצלחה',
          subheader: 'כעת ניתן לבצע התחברות',
          content: '',
        },
        stepGroupForm: {
          groupName: '',
          buttons: [],
          controls: {},
        },
        stepButtons: this.isAdmin
          ? [
              {
                name: 'RouteTo',
                label: 'בחזרה לדשבורד',
                route: '/admin-dashboard-layout/students-management',
                role: ButtonAction.RouteTo,
                color: 'accent',
                className: 'mat-raised-button',
              },
            ]
          : [
              {
                name: 'RouteTo',
                label: 'התחבר למערכת',
                route: '/auth/login',
                role: ButtonAction.RouteTo,
                color: 'accent',
                className: 'mat-raised-button',
              },
            ],
      },
    ],
  };
}
