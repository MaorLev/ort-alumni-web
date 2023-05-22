import { Injectable } from '@angular/core';
import { FormInterface } from '@features/feature-form';

import { SearchBarTeacherControls } from './search-bar-teacher-controls';
// import { StudyProgramInterface } from 'apps/ort-alumni-client-app/src/app/entities/static-entities-backend-data/static-entities-interfaces/study-program.interface';
import { StaticEntitiesDataQuery } from '../../../../../entities/static-entities-backend-data/static-entities-data.query';
import { SearchBarTeacherQuery } from './search-bar-teacher.query';

@Injectable()
export class SearchBarTeacherDataFormService {
  // private studyPrograms:StudyProgramInterface [];
  constructor(private staticEntitiesDataQuery:StaticEntitiesDataQuery, private searchBarTeacherQuery:SearchBarTeacherQuery) {
    // this.studyPrograms = staticEntitiesDataQuery.getStudyPrograms();
  }
  readonly SearchBarTeacherFormData: FormInterface = {
    groupName: 'searchBarTeacherForm',
    buttons: [{ label: 'חפש', type: 'submit', className: 'btn' }],
    styleStructure:'style-grid',
    controls: {
      studyprogram: SearchBarTeacherControls.studyprogram(this.staticEntitiesDataQuery.getStudyPrograms()),
      courses: SearchBarTeacherControls.courses(this.searchBarTeacherQuery.activeCoursesList$),
      modestudyids: SearchBarTeacherControls.Modestudyids(this.staticEntitiesDataQuery.getModeStudies()),
      cities: SearchBarTeacherControls.Cities(this.staticEntitiesDataQuery.getCities()),
    },
  };

}
