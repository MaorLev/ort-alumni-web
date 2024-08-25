import { Injectable } from '@angular/core';
import { ButtonAction } from '@ui-components/ui-button';
import { StepsForm } from '@features/feature-expansion-panel';
import { AlumnusControls } from './alumnus-controls';
import { CityInterface } from '../../../static-entities-backend-data/static-entities-interfaces/city.Interface';
import { StudyProgramInterface } from '../../../static-entities-backend-data/static-entities-interfaces/study-program.interface';
import { CollegeInterface } from '../../../static-entities-backend-data/static-entities-interfaces/college.interface';
import { StaticEntitiesDataQuery } from '../../../static-entities-backend-data/static-entities-data.query';
import { SessionQuery } from 'apps/ort-alumni-client-app/src/app/auth/session/state/session.query';

@Injectable({
  providedIn: 'root',
})
export class AlumnusPanelDataConfig {
  private cities: CityInterface[];
  private studyPrograms: StudyProgramInterface[];
  private colleges: CollegeInterface[];
  isAdmin: boolean = this.sessionQuery.isAdmin();
  constructor(
    private staticEntitiesDataQuery: StaticEntitiesDataQuery,
    private sessionQuery: SessionQuery
  ) {
    this.cities = staticEntitiesDataQuery.getCities();
    this.studyPrograms = staticEntitiesDataQuery.getStudyPrograms();
    this.colleges = staticEntitiesDataQuery.getColleges();
  }
  readonly alumnusForm: StepsForm = {
    groupStepsName: 'AlumnusForm',
    groupId: 1,
    content: { header: 'רישום בוגר' },
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
            firstname: AlumnusControls.Firstname(),
            lastname: AlumnusControls.Lastname(),
            email: AlumnusControls.Email(),
            password: AlumnusControls.Password(),
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
            phone: AlumnusControls.Phone(),
            dateofbirth: AlumnusControls.Dateofbirth(),
            cardid: AlumnusControls.Cardid(),
            city: AlumnusControls.City(
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
            college: AlumnusControls.College(
              this.staticEntitiesDataQuery.getColleges()
            ),
            studyprogram: AlumnusControls.Studyprogram(
              this.staticEntitiesDataQuery.getStudyPrograms()
            ),
            studystartyear: AlumnusControls.Studystartyear(),
            studyfinishyear: AlumnusControls.Studyfinishyear(),
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
        order: 3,
        stepHeader: { title: 'פרטי תעסוקה', description: '', icon: '' },
        stepContent: { header: '', subheader: '', content: '' },
        stepGroupForm: {
          groupName: '',
          buttons: [],
          styleStructure: 'style-grid',
          controls: {
            workplace: AlumnusControls.Workplace(),
            linkedin: AlumnusControls.Linkedin(),
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
        order: 4,
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
                route: '/admin-dashboard-layout/alumni-management',
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
