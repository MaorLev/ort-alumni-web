import { CategoryInterface } from './category.interface';
import { ArticleInterface } from './article.interface';
import { Injectable } from '@angular/core';
import { Order, QueryConfig, QueryEntity } from '@datorama/akita';
import { ArticlesState, ArticleStore } from './article.store';
import { Observable } from 'rxjs/internal/Observable';
import { map, combineLatest } from 'rxjs';
import {
  ArticlesCategoryViewType,
  CategoryIdEnum,
  // HashCategoryIdToViewName,
  HashCategoryIdToName,
} from './category-hashmap';

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

  filtered(
    heading: string,
    limitTo: number,
    category?: number
  ): Observable<ArticleInterface[]> {
    return this.selectAll({
      filterBy: (entity) =>
        category != ArticlesCategoryViewType.All && heading.length > 0
          ? entity.categoryid === category && entity.heading.includes(heading)
          : entity.heading.includes(heading) ,
      limitTo: limitTo,
    });
  }


  findHeading(original: string, input: string)
  {
    original.includes(input);
  }

  selectAllArticles$ = (limitTo?: number) =>
    this.selectAll({
      limitTo: limitTo,
    });
  selectAllCategories$ = () => this.select((state) => state.categories);

  selectAllCategoriesAndArticlesAsFlatArr$ = () =>
    combineLatest([this.selectAllArticles$(), this.selectAllCategories$()]);

  selectArticlesViaCategoriesByLimit$ = (limitTo?: number | undefined) =>
    combineLatest([
      this.selectArticlesViaCategoryByLimit(
        CategoryIdEnum.Events,
        limitTo ? limitTo : undefined
      ),
      this.selectArticlesViaCategoryByLimit(
        CategoryIdEnum.News,
        limitTo ? limitTo : undefined
      ),
    ]).pipe(
      map((res) => {
        return res;
      })
    );

  selectArticlesViaCategoryByLimit(
    categoryId: number,
    limitTo?: number | undefined
  ): Observable<CategoryInterface> {
    return this.selectAll({
      limitTo: limitTo ? limitTo : undefined,
      filterBy: (entity) => entity.categoryid === categoryId,
    }).pipe(
      map((res) => {
        const categoryid = categoryId;
        const arts = res;
        const articlesViaCategory: CategoryInterface = {
          id: categoryid,
          articles: arts,
          name: HashCategoryIdToName[categoryid],
        };
        // hebName: HashCategoryIdToViewName[categoryid],

        return articlesViaCategory;
      })
    );
  }
  selectEntityById$ = (id: number) => this.selectEntity(id);

  isLoading():Observable<boolean>{
    return this.selectLoading();
  }
  constructor(protected override store: ArticleStore) {
    super(store);
  }
}
