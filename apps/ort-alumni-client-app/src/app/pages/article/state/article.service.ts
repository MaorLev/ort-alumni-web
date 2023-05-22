import { shareReplay, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, combineLatest, switchMap, of } from 'rxjs';
import { ArticleInterface } from './article.interface';
import { ArticleDataService } from './article.data.service';
import { ArticleStore } from './article.store';
import { CategoryInterface } from './category.interface';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { ArticleQuery } from './article.query';
import { NumberFormatStyle } from '@angular/common';
import { StaticEntitiesDataQuery } from '../../../entities/static-entities-backend-data/static-entities-data.query';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(
    private articleDataService: ArticleDataService,
    private articleStore: ArticleStore,
    private articleQuery: ArticleQuery,
    private staticEntitiesDataQuery:StaticEntitiesDataQuery
  ) {
    this.loadArticlesAndCategories().pipe(shareReplay(1)).subscribe();
    // this.loadArticlesAndCategories().pipe(take(1)).subscribe();
  }
  //SERVER API
  getAllArticles(): Observable<ArticleInterface[]> {
    return this.articleDataService.getAllArticles();
  }
  getAllCategories(): Observable<CategoryInterface[]> {
    //Exclude the constant Education category
    return this.staticEntitiesDataQuery.categories$;
  }

  createArticle(
    article: ArticleInterface
  ): Observable<HttpEvent<ArticleInterface>> {

    return this.articleDataService.createArticle(article).pipe(
      tap((event) => {
        if (event.type === HttpEventType.Response) {
          this.articleStore.add([event.body as ArticleInterface]);
        }
      })
    );
  }
  updateArticle(
    articleId: number,
    article: ArticleInterface
  ): Observable<HttpEvent<ArticleInterface>> {

    return this.articleDataService.updateArticle(articleId, article).pipe(
      tap((event) => {
        if (event.type === HttpEventType.Response) {
          const art = event.body;
          this.articleStore.updateEntity(articleId, {
            ...art,
          } as ArticleInterface);
        }
      })
    );
  }

  deleteArticle(articleId: number): Observable<unknown> {

    return this.articleDataService.deleteArticle(articleId).pipe(
      tap(() => {
        this.articleStore.remove(articleId);
      })
    );
  }
  //LOADER
  loadArticlesAndCategories(): Observable<
    [Array<ArticleInterface>, Array<CategoryInterface>]
  > {

    return this.articleQuery.selectAreArticlesLoaded$.pipe(
      switchMap((areArticlesLoaded: boolean) => {
        if (!areArticlesLoaded) {
          return combineLatest([
            this.getAllArticles(),
            this.getAllCategories(),
          ]);
        }
        return of();
      }),
      tap(
        ([articles, categories]: [ArticleInterface[], CategoryInterface[]]) => {
          this.articleStore.loadArticles(articles, categories, true);
        }
      )
    );
  }

  //Queries Area
  selectAllArticles(limitTo?: number): Observable<Array<ArticleInterface>> {

    return this.articleQuery.selectAllArticles$(limitTo);
  }

  selectAllCategories(): Observable<Array<CategoryInterface>> {

    return this.articleQuery.selectAllCategories$();
  }
  getSimpleAllCategories(): Array<CategoryInterface> {

    return this.staticEntitiesDataQuery.getCategories();
  }
  selectAllCategoriesAndArticles(): Observable<
    [Array<ArticleInterface>, Array<CategoryInterface>]
  > {

    return this.articleQuery.selectAllCategoriesAndArticlesAsFlatArr$();
  }

  selectArticlesViaCategoryByLimit(
    categoryId: number,
    limitTo?: number
  ): Observable<CategoryInterface> {

    return this.articleQuery.selectArticlesViaCategoryByLimit(
      categoryId,
      limitTo
    );
  }
  selectArticlesViaCategoriesByLimit(
    limitTo?: number
  ): Observable<Array<CategoryInterface>> {

    return this.articleQuery.selectArticlesViaCategoriesByLimit$(limitTo);
  }

  selectEntityById(id: NumberFormatStyle) {

    return this.articleQuery.selectEntityById$(id);
  }

  filtered(
    heading: string,
    limitTo: number,
    categoryId?: number
  ): Observable<ArticleInterface[]> {

    return this.articleQuery.filtered(heading, limitTo, categoryId);
  }
  isLoading():Observable<boolean> {
    return this.articleQuery.isLoading();
  }
}
