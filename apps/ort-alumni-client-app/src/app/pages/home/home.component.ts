import { ArticleService } from './../article/state/article.service';
import { ArticleInterface } from '../article/state/article.interface';

import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

import {
  Observable,
  mergeMap,
} from 'rxjs';
import { ArticleQuery } from '../article/state/article.query';
import { ArticlesByCategory } from '../article/state/articles-by-category.type';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  articles$: Observable<ArticleInterface[]>;
  articlesByCategory$: Observable<ArticlesByCategory[]>;

  constructor(
    private articleService: ArticleService,
    private articleQuery: ArticleQuery
  ) {
    this.articlesByCategory$ = this.articleService
      .loadAndGetAllArticles()
      .pipe(
        mergeMap(() => {
          return this.articleQuery.selectAllArticlesAndCategory$(5);
        })
      );
  }

}
