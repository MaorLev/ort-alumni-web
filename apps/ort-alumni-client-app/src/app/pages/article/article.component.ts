import { ActivatedRoute } from '@angular/router';
import { Observable, mergeMap, map } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ArticleQuery } from './state/article.query';
import { ArticleService } from './state/article.service';
import { environment } from '@environments';
import {
  HashCategoryIdToName,
  HashCategoryNameToId,
  HashCategoryIdToViewName,
} from './state/category-hashmap';
import { ArticlesByCategory } from './state/articles-by-category.type';
import { cloneDeep } from '@utils/util-others';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleComponent implements OnInit {
  articlesByCategory$: Observable<ArticlesByCategory[]>;
  endPoint = environment.endPointApi + '/';
  categoryName: string | null = null;
  constructor(
    private articleService: ArticleService,
    private articleQuery: ArticleQuery,
    activateRouter: ActivatedRoute
  ) {
    const name = activateRouter.snapshot.paramMap.get('id');
    if (name) this.categoryName = name;
  }

  ngOnInit(): void {
    if (this.categoryName === null) {
      this.articlesByCategory$ = this.articleService
        .loadAndGetAllArticles()
        .pipe(
          mergeMap(() => {
            return this.articleQuery.selectAllArticlesAndCategory$();
          })
        );
    } else {
      this.articlesByCategory$ = this.articleService
        .loadAndGetAllArticles()
        .pipe(
          mergeMap(() => {
            return this.articleQuery
              .selectArticleByCategory(
                HashCategoryNameToId[this.categoryName as string]
              )
              .pipe(
                map((res) => {
                  const articles: ArticlesByCategory[] = [];
                  const categoryId =
                    HashCategoryNameToId[this.categoryName as string];
                  const arts = cloneDeep(res);
                  articles.push({
                    categoryId: categoryId,
                    articles: arts,
                    categoryView: HashCategoryIdToViewName[categoryId],
                    categoryName: HashCategoryIdToName[categoryId],
                  });

                  return articles;
                })
              );
          })
        );
    }
  }
}
