import { CategoryInterface } from './category.interface';
import { ArticleInterface } from './article.interface';
import { Injectable } from '@angular/core';
import { Order, QueryConfig, QueryEntity } from '@datorama/akita';
import { ArticlesState, ArticleStore } from './article.store';
import { Observable } from 'rxjs/internal/Observable';
import { map, combineLatest } from 'rxjs';
import {
  CategoryIdEnum,
  HashCategoryIdToViewName,
  HashCategoryIdToName,
} from './category-hashmap';
import { ArticlesByCategory } from './articles-by-category.type';

export interface categoryLimit {
  category: CategoryInterface;
  limitTo: number;
}
@QueryConfig({
  sortBy: 'date',
  sortByOrder: Order.DESC,
})
@Injectable({ providedIn: 'root' })
export class ArticleQuery extends QueryEntity<ArticlesState> {
  selectAreArticlesLoaded$ = this.select((state) => {
    return state.areArticlesLoaded;
  });

  
  selectAllArticlesAndCategory$ = (limitTo?: number) =>
    combineLatest([
      this.selectArticleByCategory(
        CategoryIdEnum.Events,
        limitTo ? limitTo : undefined
      ),
      this.selectArticleByCategory(
        CategoryIdEnum.General,
        limitTo ? limitTo : undefined
      ),
    ]).pipe(
      map((res) => {
        const articles: ArticlesByCategory[] = [];
        for (let i = 0; i < 2; i++) {
          articles.push({
            categoryId: i + 1,
            articles: res[i],
            categoryView: HashCategoryIdToViewName[i + 1],
            categoryName: HashCategoryIdToName[i + 1],
          });
        }

        return articles;
      })
    );

  selectArticleByCategory(
    categoryId: number,
    limitTo?: number
  ): Observable<ArticleInterface[]> {
    return this.selectAll({
      limitTo: limitTo ? limitTo : undefined,
      filterBy: (entity) => entity.categoryid === categoryId,
    });
  }
  selectEntityById = (id: number) => this.selectEntity(id);
  getEntitySnapshot = (id: number) => this.getEntity(id);
  constructor(protected override store: ArticleStore) {
    super(store);
  }
}
