import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { SearchBarTeacherModel } from './search-bar-teacher.model';
import { CourseByStudyProgramInterface } from '../../../../../entities/static-entities-backend-data/static-entities-interfaces/course-by-studyprogram.interface';



export type SearchBarTeacherState = {
  loading: boolean | undefined;
  result: SearchBarTeacherModel | undefined;
  activeCoursesList: CourseByStudyProgramInterface[] | undefined;
}

export function createInitialSearchBarState(): SearchBarTeacherState {
  return {

    loading: false,
    result: undefined,
    activeCoursesList: undefined

  };
}

@Injectable()
@StoreConfig({ name: 'searchBarTeacher' })
export class SearchBarTeacherStore extends Store<SearchBarTeacherState> {
  constructor() {
    super(createInitialSearchBarState());
  }


  setActiveCoursesList(activeCoursesList: CourseByStudyProgramInterface[]) {
    this.update({ activeCoursesList });
  }

  setSearchParams(result: SearchBarTeacherModel) {
    this.update({ result });
  }
}
