import { Injectable } from '@angular/core';
import { Query, QueryEntity } from '@datorama/akita';
import { Observable, of } from 'rxjs';
import {
  SearchBarTeacherState,
  SearchBarTeacherStore,
} from './search-bar-teacher.store';
import { CityInterface } from '../../../../../entities/static-entities-backend-data/static-entities-interfaces/city.Interface';
import { ModeStudyInterface } from '../../../../../entities/static-entities-backend-data/static-entities-interfaces/mode-study.interface';
import { CollegeInterface } from '../../../../../entities/static-entities-backend-data/static-entities-interfaces/college.interface';
import { CourseByStudyProgramInterface } from '../../../../../entities/static-entities-backend-data/static-entities-interfaces/course-by-studyprogram.interface';
import { StudyProgramInterface } from '../../../../../entities/static-entities-backend-data/static-entities-interfaces/study-program.interface';
import { SearchBarTeacherModel } from './search-bar-teacher.model';

@Injectable()
export class SearchBarTeacherQuery extends Query<SearchBarTeacherState> {
  constructor(protected override store: SearchBarTeacherStore) {
    super(store);
  }

  result$: Observable<SearchBarTeacherModel | undefined> = this.select(
    (state) => state.result
  );
  activeCoursesList$: Observable<CourseByStudyProgramInterface[]> = this.select(
    (state) => {
      return state.activeCoursesList?.sort((a, b) => a.name.localeCompare(b.name)) as CourseByStudyProgramInterface[];
    }
  );
  cities$: Observable<CityInterface[] | undefined> = this.select(
    (state) => state?.result?.cities
  );
  modeStudy$: Observable<ModeStudyInterface[]| undefined> = this.select(
    (state) => state?.result?.modestudyids
  );
  courses$: Observable<CourseByStudyProgramInterface []| undefined> = this.select(
    (state) => state?.result?.courses
  );
  studyprogram$: Observable<StudyProgramInterface| undefined> = this.select(
    (state) => state?.result?.studyprogram
  );

  getResult(): SearchBarTeacherModel| undefined {
    return this.getValue().result;
  }
  getActiveCoursesList(): CourseByStudyProgramInterface[] | undefined{
    return this.getValue().activeCoursesList;
  }
  getCities(): CityInterface[] | undefined{
    return this.getValue().result?.cities;
  }
  getModeStudies(): ModeStudyInterface[] | undefined{
    return this.getValue().result?.modestudyids;
  }

  getCourse(): CourseByStudyProgramInterface [] | undefined{
    return this.getValue().result?.courses;
  }

  getStudyProgram(): StudyProgramInterface | undefined{
    return this.getValue().result?.studyprogram;
  }
}
