import { QueryEntity } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { StaticEntitiesDataStore } from './static-entities-data.store';
import { StaticEntitiesDataState } from './static-entities-data-state-model';
import { CityInterface } from './static-entities-interfaces/city.Interface';
import { CollegeInterface } from './static-entities-interfaces/college.interface';
import { StudyProgramInterface } from './static-entities-interfaces/study-program.interface';
import { LanguageInterface } from './static-entities-interfaces/language.interface';
import { Observable } from 'rxjs';
import { CategoryInterface } from '../../pages/article/state/category.interface';
import { CourseByStudyProgramInterface } from './static-entities-interfaces/course-by-studyprogram.interface';
import { ModeStudyInterface } from './static-entities-interfaces/mode-study.interface';


@Injectable({ providedIn: 'root' })
export class StaticEntitiesDataQuery extends QueryEntity<StaticEntitiesDataState> {
  cities$:Observable<CityInterface[]> = this.select(state => state.cities);
  colleges$:Observable<CollegeInterface[]> = this.select(state => state.colleges);
  studyPrograms$:Observable<StudyProgramInterface[]> = this.select(state => state.studyPrograms);
  languages$:Observable<LanguageInterface[]> = this.select(state => state.languages);
  categories$:Observable<CategoryInterface[]> = this.select(state => state.categories);
  courses$:Observable<CourseByStudyProgramInterface[]> = this.select(state => state.courses);


  categoriesByExclude$(id:number):Observable<CategoryInterface[]> {
    return this.select( (state) => state.categories.filter((category) => category.id != id)) ;
  }
  categoriesById$(id:number):Observable<CategoryInterface[]> {
    return this.select( (state) => state.categories.filter((category) => category.id === id)) ;
  }
  coursesBySPId$(spId:number):Observable<CourseByStudyProgramInterface[]> {
    return this.select( (state) => state.courses.filter((crs) => crs.studyProgramId === spId && crs.name != ''));
  }


  constructor(protected override store: StaticEntitiesDataStore) {
    super(store);
  }

  getCities(): CityInterface[] {
    return this.getValue().cities;
  }
  getModeStudies(): ModeStudyInterface[] {
    return this.getValue().modeStudies;
  }

  getColleges(): CollegeInterface[] {
    return this.getValue().colleges;
  }
  getCourses(): CourseByStudyProgramInterface[] {
    return this.getValue().courses.filter((crs) => crs.name != '');
  }

  getStudyPrograms(): StudyProgramInterface[] {
    return this.getValue().studyPrograms;
  }

  getLanguages(): LanguageInterface[] {
    return this.getValue().languages;
  }
  getCategories(): CategoryInterface[] {
    return this.getValue().categories;
  }
  getCategoriesByExclude(id:number):CategoryInterface[] {
    return this.getCategories().filter((category) => category.id != id) ;
  }
  getCategoriesById(id:number):CategoryInterface[] {
    return this.getCategories().filter((category) => category.id === id) ;
  }
  getCoursesBySPId(spId:number):CourseByStudyProgramInterface[] {

    return this.getCourses().filter((crs) => crs.studyProgramId === spId && crs.name != '');
  }
}