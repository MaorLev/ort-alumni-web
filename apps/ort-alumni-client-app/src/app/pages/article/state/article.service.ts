import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, combineLatest, switchMap } from 'rxjs';
import { ArticleInterface } from './article.interface';
import { ArticleDataService } from './article.data.service';
import { ArticleStore } from './article.store';
import { CategoryInterface } from './category.interface';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { ArticleQuery } from './article.query';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(
    private articleDataService: ArticleDataService,
    private articleStore: ArticleStore,
    private router: Router,
    private articleQuery: ArticleQuery
  ) {}

  getAllArticles(): Observable<ArticleInterface[]> {
    return this.articleDataService.getAllArticles();
  }
  getAllCategories(): Observable<CategoryInterface[]> {
    return this.articleDataService.getAllCategories();
  }
  // For internal use
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  LoadArticlesAndCategories(): Observable<any> {
    return combineLatest([this.getAllArticles(), this.getAllCategories()]).pipe(
      tap(
        ([articles, categories]: [ArticleInterface[], CategoryInterface[]]) => {
          this.articleStore.loadArticles(articles, categories, true);
        }
      )
    );
  }
  //Use it for get all articles
  loadAndGetAllArticles(): Observable<ArticleInterface[]> {
    return this.articleQuery.selectAreArticlesLoaded$.pipe(
      switchMap((areArticlesLoaded) => {
        if (!areArticlesLoaded) {
          return this.LoadArticlesAndCategories().pipe(
            map((articlesAndCategories) => articlesAndCategories[0])
          );
        }
        return this.articleQuery.selectAll();
      })
    );
  }
  createArticle(
    article: ArticleInterface
  ): Observable<HttpEvent<ArticleInterface>> {
    return this.articleDataService.createArticle(article).pipe(
      tap((event) => {
        if (event.type === HttpEventType.Response) {
          this.articleStore.add([{...event.body as ArticleInterface}]);
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
}
