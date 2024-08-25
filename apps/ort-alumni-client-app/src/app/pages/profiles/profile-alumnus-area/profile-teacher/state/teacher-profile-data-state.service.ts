import { Injectable } from '@angular/core';
import { FormInterface } from '@features/feature-form';
import { TeacherControls } from '../../../../../entities/alumnus-area/teacher/configs-teacher/teacher-controls';
import { ProfileStateType } from '@features/feature-profile'
import { ProfileAbstractDataState } from '@features/feature-profile'
import { NavigationType } from '@features/feature-navigation';
import { StaticEntitiesDataQuery } from '../../../../../entities/static-entities-backend-data/static-entities-data.query';
import { CourseByStudyProgramInterface } from '../../../../../entities/static-entities-backend-data/static-entities-interfaces/course-by-studyprogram.interface';
import { AlumnusQuery } from '../../../../../entities/alumnus-area/alumnus/state-alumnus/alumnus.query';
import { LanguageInterface } from '../../../../../entities/static-entities-backend-data/static-entities-interfaces/language.interface';


@Injectable()
export class TeacherProfileDataState extends ProfileAbstractDataState{
  readonly stateName: string;
  readonly NavigationData: NavigationType;
  readonly activeGroup: string;
  readonly groups: FormInterface[];
  constructor(private staticEntitiesDataQuery:StaticEntitiesDataQuery, private alumnusQuery:AlumnusQuery) {
    super();
    this.stateName = 'Teacher';
    this.activeGroup = 'teacher-details';
    this.NavigationData = {
      routesData: [
        {
          label: 'פרטי מורה',
          name: 'teacher-details',
          route: 'teacher-details',
        },
        {
          label: 'פרטי שיעור',
          name: 'lesson-details',
          route: 'lesson-details',
        },
        { label: 'שינוי תמונה', name: 'image-edit', route: 'image-edit' },
      ],
      alignment: 'horizontal',
      routingMethod: 'output',
    };
    this.groups = [
      {
        groupName: 'teacher-details',
        buttons: [{ label: 'עדכן', type: 'submit', className: 'btn' }],
        styleStructure: 'fullWidth',
        controls: {
          mailforstudy: TeacherControls.Mailforstudy(),
          description: TeacherControls.Description(),
          languages: TeacherControls.Languages(this.getLanguages()),
        },
      },
      {
        groupName: 'lesson-details',
        buttons: [{ label: 'עדכן', type: 'submit', className: 'btn' }],
        styleStructure: 'fullWidth',
        controls: {
          courses: TeacherControls.Courses(this.getCourses()),
          modestudyids: TeacherControls.Modestudyids(this.staticEntitiesDataQuery.getModeStudies()),
          cities: TeacherControls.Cities(this.staticEntitiesDataQuery.getCities()),
          rate: TeacherControls.Rate(),
        },
      },
      {
        groupName: 'image-edit',
        buttons: [{ label: 'עדכן', type: 'submit', className: 'btn' }],
        styleStructure: 'fullWidth',
        controls: {
          logo: TeacherControls.Logo(),
        },
      },
    ];
  }
  private getLanguages():LanguageInterface[]{
    return this.staticEntitiesDataQuery.getLanguages();
  }

  private getCourses():CourseByStudyProgramInterface[]{

    const alumnus = this.alumnusQuery.getActive();

    if(alumnus) {
      const courses =  this.staticEntitiesDataQuery.getCoursesBySPId(alumnus?.studyprogram?.id);

      return courses;
    }
    return [];
  }
  allInOneConfigs(): ProfileStateType {
    return {
      stateName: this.stateName,
      NavigationData: this.NavigationData,
      activeGroup: this.activeGroup,
      groups: this.groups,
    };
  }

}
