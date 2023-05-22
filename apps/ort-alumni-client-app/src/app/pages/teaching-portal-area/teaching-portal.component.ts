import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import { TeacherModel } from '../../entities/alumnus-area/teacher/configs-teacher/teacher-model';
// import { ArticleInterface } from '../article/state/article.interface';
// import { RouteNavigationType } from '@features/feature-navigation';
// import { AlumnusModel } from '../../entities/alumnus-area/alumnus/configs-alumnus/alumnus-model';
import { TeacherPortalQuery } from './state/teaching-portal.query';
import { TeachingPortalService } from './state/teaching-portal.service';
// import { CategoryInterface } from '../article/state/category.interface';
import { TeachingPortalModel } from './state/teaching-portal.types';



@Component({
  selector: 'app-teaching-portal',
  templateUrl: './teaching-portal.component.html',
  styleUrls: ['./teaching-portal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeachingPortalComponent implements OnInit {


  isLoading$:Observable<boolean>;
  // articles$:Observable<CategoryInterface | undefined>;
  // alumnusTeachers$:Observable<AlumnusModel[] | undefined>;
  viewModel$:Observable<TeachingPortalModel | undefined>;



  constructor(private teachingPortalService:TeachingPortalService ,private teachingPortalQuery:TeacherPortalQuery) {}

  ngOnInit(): void {


    this.isLoading$ = this.teachingPortalQuery.isLoggedIn$;
    // this.articles$ = this.teachingPortalQuery.selectEducationArticles$;
    // this.alumnusTeachers$ = this.teachingPortalQuery.selectAlumnusTeachers$;
    this.viewModel$ = this.teachingPortalQuery.selectVM$;
    this.teachingPortalService.InitializeTeachingPortal();

  }
}
