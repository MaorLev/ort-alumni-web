import { Injectable } from '@angular/core';
import { EntityState, EntityStore, Store, StoreConfig } from '@datorama/akita';
import { SearchBarTeacherModel } from './search-bar-teacher.model';
import { CourseByStudyProgramInterface } from '../../../../../entities/static-entities-backend-data/static-entities-interfaces/course-by-studyprogram.interface';


// export interface SearchBarTeacherState extends EntityState<any> {
//   result: SearchBarTeacherModel;
//   activeCoursesList: CourseByStudyProgramInterface[];
// }
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

  // const activeCoursesList = cloneDeep(this.staticEntitiesDataQuery.getCoursesBySPId(studyprogramId));
  // if(activeCoursesList.length === 0) {
  // this.updateActive({ activeCoursesList });
  // }
  // else {
  //   const courses = cloneDeep(this.staticEntitiesDataQuery.getCourses());
  //   this.updateActive({ courses });
  // }
}
