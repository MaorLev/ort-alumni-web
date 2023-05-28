import { Injectable } from '@angular/core';
import { FormInterface } from '@features/feature-form';
import { NavigationType } from '@features/feature-navigation';
import { StudentControls } from '../../../../entities/student/configs-student/student-controls';
import { ProfileStateType } from '@features/feature-profile'
import { ProfileAbstractDataState } from '@features/feature-profile';
import { StaticEntitiesDataQuery } from '../../../../entities/static-entities-backend-data/static-entities-data.query';
import { CityInterface } from '../../../../entities/static-entities-backend-data/static-entities-interfaces/city.Interface';
import { StudyProgramInterface } from '../../../../entities/static-entities-backend-data/static-entities-interfaces/study-program.interface';
import { CollegeInterface } from '../../../../entities/static-entities-backend-data/static-entities-interfaces/college.interface';


@Injectable()
export class StudentProfileDataState extends ProfileAbstractDataState{
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
    this.stateName = 'Student';
    this.activeGroup = 'enterance';
    this.NavigationData = {
      routesData: [
        { label: 'פרטי כניסה', name: 'enterance', route: 'enterance' },
        { label: 'פרטיים אישיים', name: 'personal', route: 'personal' },
        { label: 'פרטי מכללה', name: 'collage', route: 'collage' },
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
          firstname: StudentControls.Firstname(),
          lastname: StudentControls.Lastname(),
          email: StudentControls.Email(),
          password: StudentControls.Password(),
        },
      },
      {
        groupName: 'personal',
        buttons: [{ label: 'עדכן', type: 'submit', className: 'btn' }],
        styleStructure: 'fullWidth',
        controls: {
          phone: StudentControls.Phone(),
          dateofbirth: StudentControls.Dateofbirth(),
          cardid: StudentControls.Cardid(),
          city: StudentControls.City(this.cities),
        },
      },
      {
        groupName: 'collage',
        buttons: [{ label: 'עדכן', type: 'submit', className: 'btn' }],
        styleStructure: 'fullWidth',
        controls: {
          college: StudentControls.College(this.colleges),
          studyprogram: StudentControls.Studyprogram(this.studyPrograms),
          studystartyear: StudentControls.Studystartyear(),
        },
      },
    ];
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
