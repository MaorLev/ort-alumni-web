import { Injectable } from '@angular/core';
import { FormInterface } from '@features/feature-form';

import { SearchBarTeacherControls } from './search-bar-teacher-controls';
import { StaticEntitiesDataQuery } from '../../../../../entities/static-entities-backend-data/static-entities-data.query';
import { SearchBarTeacherQuery } from './search-bar-teacher.query';

@Injectable()
export class SearchBarTeacherDataFormService {
  constructor(private staticEntitiesDataQuery:StaticEntitiesDataQuery, private searchBarTeacherQuery:SearchBarTeacherQuery) {
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
