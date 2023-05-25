import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeachingPortalStore } from './teaching-portal.store';
import { ArticleService } from '../../article/state/article.service';
import { CategoryInterface } from '../../article/state/category.interface';
import { CategoryIdEnum } from '../../article/state/category-hashmap';
import { combineLatest } from 'rxjs';
import { TeachingPortalState } from './teaching-portal.types';
import { TeacherDataService } from '../../../entities/alumnus-area/teacher/state-teacher/teacher-data.service';
import { TeacherModel } from '../../../entities/alumnus-area/teacher/configs-teacher/teacher-model';
@Injectable()
export class TeachingPortalService {
  constructor(
    private teacherDataService: TeacherDataService,
    private TPStore: TeachingPortalStore,
    private articleService: ArticleService
  ) {}


  InitializeTeachingPortal(): void {
    combineLatest([
      this.Get8NewestEducationArticles(),
      this.Get5NewestAlumniTeachers(),
    ]).subscribe(
      ([newestEducationArticles, newestAlumniTeachers]: [
        CategoryInterface,
        TeacherModel[]
      ]) => {
        // Handle the response from both API calls
        // console.log('Newest education articles:', newestEducationArticles);
        // console.log('Newest alumni teachers:', newestAlumniTeachers);
        const state: TeachingPortalState = {
          VMTeachingPortal: {
            invitatationLinks: [],
            educationArticles: newestEducationArticles,
            alumnusTeachers: newestAlumniTeachers,
          },
          loading: true,
        };
        this.TPStore.update(state);
      }
    );
  }
  Get8NewestEducationArticles(): Observable<CategoryInterface> {
    return this.articleService.selectArticlesViaCategoryByLimit(
      CategoryIdEnum.Education,
      8
    );
  }

  Get5NewestAlumniTeachers(): Observable<TeacherModel[]> {
    return this.teacherDataService.GetAlumniTeachersByPagination(1, 5);
  }
}
