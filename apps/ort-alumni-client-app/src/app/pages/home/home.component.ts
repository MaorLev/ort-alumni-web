import { environment } from '@environments';
import { ArticleService } from './../article-detail/state/article.service';
import { ArticleInterface } from './../article-detail/article.interface';

import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  OnInit,
  OnDestroy,
} from '@angular/core';

import { NgxGlideComponent } from 'ngx-glide';
import {
  Observable,
  Subscription,
  switchMap,
  map,
} from 'rxjs';
import { ArticlesState } from '../article-detail/state/article.store';
import { ArticleQuery } from '../article-detail/state/article.query';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('ngxGlide') ngxGlide!: NgxGlideComponent;
  articles$: Observable<ArticleInterface[]>;
  listArticlesSub: Subscription;
  endPoint = environment.endPointApi + '/';
  cstate: ArticlesState;

  // courses$: Observable<ArticleInterface[]> = this.articleQuery.selectAll();
  constructor(
    private articleService: ArticleService,
    private articleQuery: ArticleQuery
  ) {}
  ngOnInit(): void {
    this.articles$ = this.articleQuery.selectAreArticlesLoaded$.pipe(
      switchMap((areArticlesLoaded) => {
        if (!areArticlesLoaded) {
          return this.articleService
            .LoadArticlesAndCategories()
            .pipe(map((articlesAndCategories) => articlesAndCategories[0]));
        }
        return this.articleQuery.selectAll();
      })
    );
  }

  ngOnDestroy() {
    if (this.listArticlesSub) {
      this.listArticlesSub.unsubscribe();
    }
  }
}
