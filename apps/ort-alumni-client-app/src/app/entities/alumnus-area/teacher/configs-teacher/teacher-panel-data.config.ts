import { Injectable } from '@angular/core';
import { ButtonAction } from '@ui-components/ui-button';
import { StepsForm } from '@features/feature-expansion-panel';
import { TeacherControls } from './teacher-controls';
import { StaticEntitiesDataQuery } from '../../../static-entities-backend-data/static-entities-data.query';
import { AlumnusQuery } from '../../alumnus/state-alumnus/alumnus.query';
import { CourseByStudyProgramInterface } from '../../../static-entities-backend-data/static-entities-interfaces/course-by-studyprogram.interface';
import { LanguageInterface } from '../../../static-entities-backend-data/static-entities-interfaces/language.interface';

@Injectable()
export class TeacherPanelDataConfig {
  constructor(
    private staticEntitiesDataQuery: StaticEntitiesDataQuery,
    private alumnusQuery: AlumnusQuery
  ) {
    this.teacherForms = [
      {
        groupStepsName: 'TeacherForm',
        groupId: 1,
        content: { header: 'רישום מורה' },
        steps: [
          {
            stepName: '',
            order: 1,
            stepHeader: { title: 'פרטי מורה', description: '', icon: '' },
            stepContent: { header: '', subheader: '', content: '' },
            stepGroupForm: {
              groupName: '',
              buttons: [],
              styleStructure: 'style-grid',
              controls: {
                mailforstudy: TeacherControls.Mailforstudy(),
                modestudyids: TeacherControls.Modestudyids(
                  this.staticEntitiesDataQuery.getModeStudies()
                ),
                description: TeacherControls.Description(),
                cities: TeacherControls.Cities(
                  this.staticEntitiesDataQuery.getCities()
                ),
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
            stepHeader: { title: 'המשך פרטים', description: '', icon: '' },
            order: 2,
            stepContent: { header: '', subheader: '', content: '' },
            stepGroupForm: {
              groupName: '',
              buttons: [],
              styleStructure: 'style-grid',

              controls: {
                languages: TeacherControls.Languages(this.getLanguages()),
                courses: TeacherControls.Courses(this.getCourses()),
                rate: TeacherControls.Rate(),
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
        ],
      },
      {
        groupStepsName: 'TeacherLogoForm',
        groupId: 2,
        content: {
          header: 'העלאת תמונה וסיום',
          subheader: 'באפשרותך להעלות תמונה',
          content: 'העלאת תמונה מגדילה את הפניות מהסטודנטים',
        },
        steps: [
          {
            stepName: '',
            order: 1,
            stepHeader: { title: 'העלאת תמונה', description: '', icon: '' },
            stepContent: { header: 'העלה תמונה', subheader: '', content: '' },
            stepGroupForm: {
              groupName: '',
              buttons: [],
              styleStructure: 'fullWidth',
              controls: {
                logo: TeacherControls.Logo(),
              },
            },
            stepButtons: [
              {
                name: 'Submit',
                label: 'סיום',
                role: ButtonAction.StepsSubmited,
                color: 'accent',
                className: 'mat-raised-button',
              },
            ],
          },
          {
            stepName: '',
            stepHeader: { title: 'סיום', description: '', icon: '' },
            order: 2,
            stepContent: {
              header: 'נרשמת בהצלחה',
              subheader: '',
              content: '',
            },
            stepGroupForm: {
              groupName: '',
              buttons: [],
              controls: {},
            },
            stepButtons: [
              {
                name: 'RouteTo',
                label: 'עבור לפרופיל',
                route: '/profile',
                role: ButtonAction.RouteTo,
                color: 'accent',
                className: 'mat-raised-button',
              },
              {
                name: 'RouteTo',
                label: 'חזור לדף הבית',
                route: '/',
                role: ButtonAction.RouteTo,
                color: 'accent',
                className: 'mat-raised-button',
              },
            ],
          },
        ],
      },
    ];
  }

  readonly teacherForms: StepsForm[];

  private getCourses(): CourseByStudyProgramInterface[] {
    const alumnus_studyprogram_id =
      this.alumnusQuery.getActive()?.studyprogram.id;

    if (alumnus_studyprogram_id) {
      const courses = this.staticEntitiesDataQuery.getCoursesBySPId(
        alumnus_studyprogram_id
      );

      return courses;
    }
    return [];
  }
  private getLanguages(): LanguageInterface[] {
    return this.staticEntitiesDataQuery.getLanguages();
  }
}
