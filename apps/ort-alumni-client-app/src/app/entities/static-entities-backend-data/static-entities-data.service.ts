import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StaticEntitiesDataStore } from './static-entities-data.store';
import { CityInterface } from './static-entities-interfaces/city.Interface';
import { CollegeInterface } from './static-entities-interfaces/college.interface';
import { StudyProgramInterface } from './static-entities-interfaces/study-program.interface';
import { LanguageInterface } from './static-entities-interfaces/language.interface';
import { environment } from '@environments';
import { take } from 'rxjs';
import { CategoryInterface } from '../../pages/article/state/category.interface';
import { CourseByStudyProgramInterface } from './static-entities-interfaces/course-by-studyprogram.interface';
import { ModeStudyInterface } from './static-entities-interfaces/mode-study.interface';

@Injectable({providedIn: 'root'})
export class StaticEntitiesDataService {
  baseUrl: string;
  constructor(
    private http: HttpClient,
    private staticEntitiesDataStore: StaticEntitiesDataStore
  ) {
    this.baseUrl = environment.endPointApi;
  }

  readonly modeStudies:ModeStudyInterface [] = [
    { name: 'אונליין', id: 2 },
    { name: 'פרונטלי', id: 1 },
  ];
  getCities() {
    return this.http
      .get<CityInterface[]>(`${this.baseUrl}/data/cities`)
      .pipe(take(1));
  }

  getColleges() {
    return this.http
      .get<CollegeInterface[]>(`${this.baseUrl}/data/colleges`)
      .pipe(take(1));
  }

  getStudyPrograms() {
    return this.http
      .get<StudyProgramInterface[]>(`${this.baseUrl}/data/study-programs`)
      .pipe(take(1));
  }
  getCourses() {
    return this.http
      .get<CourseByStudyProgramInterface[]>(`${this.baseUrl}/data/courses`)
      .pipe(take(1));
  }

  getLanguages() {
    return this.http
      .get<LanguageInterface[]>(`${this.baseUrl}/data/languages`)
      .pipe(take(1));
  }
  getCategories() {
    return this.http
      .get<CategoryInterface[]>(`${this.baseUrl}/data/categories`)
      .pipe(take(1));
  }

  initData() {
    this.staticEntitiesDataStore.update({ modeStudies:this.modeStudies });

    this.getCities().subscribe((cities: CityInterface[]) => {
      this.staticEntitiesDataStore.update({ cities });
    });

    this.getColleges().subscribe((colleges: CollegeInterface[]) => {
      this.staticEntitiesDataStore.update({ colleges });
    });

    this.getStudyPrograms().subscribe(
      (studyPrograms: StudyProgramInterface[]) => {
        this.staticEntitiesDataStore.update({ studyPrograms });
      }
    );
    this.getCourses().subscribe((courses: CourseByStudyProgramInterface[]) => {
      this.staticEntitiesDataStore.update({ courses });
    });

    this.getLanguages().subscribe((languages: LanguageInterface[]) => {
      this.staticEntitiesDataStore.update({ languages });
    });
    this.getCategories().subscribe((categories: CategoryInterface[]) => {
      this.staticEntitiesDataStore.update({ categories });
    });
  }
}
