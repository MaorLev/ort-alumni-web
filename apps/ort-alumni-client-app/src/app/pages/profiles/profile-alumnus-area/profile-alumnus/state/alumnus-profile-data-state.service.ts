import { Injectable } from '@angular/core';
import { FormInterface } from '@features/feature-form';
import { NavigationType } from '@features/feature-navigation';
import { AlumnusControls } from '../../../../../entities/alumnus-area/alumnus/configs-alumnus/alumnus-controls';
import { ProfileStateType } from '@features/feature-profile'
import { ProfileAbstractDataState } from '@features/feature-profile';
import { StaticEntitiesDataQuery } from '../../../../../entities/static-entities-backend-data/static-entities-data.query';
import { CityInterface } from '../../../../../entities/static-entities-backend-data/static-entities-interfaces/city.Interface';
import { StudyProgramInterface } from '../../../../../entities/static-entities-backend-data/static-entities-interfaces/study-program.interface';
import { CollegeInterface } from '../../../../../entities/static-entities-backend-data/static-entities-interfaces/college.interface';

@Injectable()
export class AlumnusProfileDataState extends ProfileAbstractDataState {
  readonly stateName: string;
  readonly NavigationData: NavigationType;
  readonly activeGroup: string;
  readonly groups: FormInterface[];
  private cities:CityInterface[];
  private studyPrograms:StudyProgramInterface [];
  private colleges:CollegeInterface [];
  constructor(private staticEntitiesDataQuery: StaticEntitiesDataQuery) {
    super();
    this.cities = staticEntitiesDataQuery.getCities();
    this.studyPrograms = staticEntitiesDataQuery.getStudyPrograms();
    this.colleges = staticEntitiesDataQuery.getColleges();
    this.stateName = 'Alumnus';
    this.activeGroup = 'enterance';
    this.NavigationData = {
      routesData: [
        { label: 'פרטי כניסה', name: 'enterance', route: 'enterance' },
        { label: 'פרטיים אישיים', name: 'personal', route: 'personal' },
        { label: 'פרטי מכללה', name: 'collage', route: 'collage' },
        { label: 'פרטי תעסוקה', name: 'occupation', route: 'occupation' },
      ],
      alignment: 'horizontal',
      routingMethod: 'output',
    };
    this.groups = [
      {
        groupName: 'enterance',
        buttons: [{ label: 'עדכן', type: 'submit', className: 'btn' }],
        styleStructure: 'fullWidth',
        controls: {
          firstname: AlumnusControls.Firstname(),
          lastname: AlumnusControls.Lastname(),
          email: AlumnusControls.Email(),
          password: AlumnusControls.Password(),
        },
      },
      {
        groupName: 'personal',
        buttons: [{ label: 'עדכן', type: 'submit', className: 'btn' }],
        styleStructure: 'fullWidth',
        controls: {
          phone: AlumnusControls.Phone(),
          dateofbirth: AlumnusControls.Dateofbirth(),
          cardid: AlumnusControls.Cardid(),
          city: AlumnusControls.City(this.cities),
        },
      },
      {
        groupName: 'collage',
        buttons: [{ label: 'עדכן', type: 'submit', className: 'btn' }],
        styleStructure: 'fullWidth',
        controls: {
          college: AlumnusControls.College(this.colleges),
          studyprogram: AlumnusControls.Studyprogram(this.studyPrograms, true),
          studystartyear: AlumnusControls.Studystartyear(),
          studyfinishyear: AlumnusControls.Studyfinishyear(),
        },
      },
      {
        groupName: 'occupation',
        buttons: [{ label: 'עדכן', type: 'submit', className: 'btn' }],
        styleStructure: 'fullWidth',
        controls: {
          workplace: AlumnusControls.Workplace(),
          linkedin: AlumnusControls.Linkedin(),
        },
      },
    ];
  }
  getGroups(): FormInterface[] {
    return this.groups;
  }

  public allInOneConfigs(): ProfileStateType {
    return {
      stateName: this.stateName,
      NavigationData: this.NavigationData,
      activeGroup: this.activeGroup,
      groups: this.groups,
    };
  }
}
