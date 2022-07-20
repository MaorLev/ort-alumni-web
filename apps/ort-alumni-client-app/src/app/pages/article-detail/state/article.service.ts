import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { ArticleInterface } from '../article.interface';
import { ArticleDataService } from './article.data.service';
import { ArticleStore } from './article.store';
import { CategoryInterface } from './category.interface';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(
    private articleDataService: ArticleDataService,
    private articleStore: ArticleStore,
    private router: Router
  ) {}

  getAllArticles(): Observable<ArticleInterface[]> {
    return this.articleDataService
      .getAllArticles();
  }
  getAllCategories(): Observable<CategoryInterface[]> {
    return this.articleDataService.getAllCategories();
  }



  LoadArticlesAndCategories():Observable<any> {
    return combineLatest([this.getAllArticles(), this.getAllCategories()]).pipe(
      tap(([articles,categories]:[ArticleInterface[],CategoryInterface[] ] ) =>{
        this.articleStore.loadArticles(articles, categories, true)
      }
      )
      );
    }

  createArticle(article: ArticleInterface ):  Observable<HttpEvent<ArticleInterface>> {
    return this.articleDataService.createArticle(article).pipe(
      tap((event) => {

        if ( event.type === HttpEventType.Response ) {
        this.articleStore.add([event.body as ArticleInterface]);
        }

      })
      );
    }
    updateArticle(articleId: number, article: ArticleInterface): Observable<HttpEvent<ArticleInterface>> {
      return this.articleDataService.updateArticle(articleId, article).pipe(
        tap((event) => {

          if ( event.type === HttpEventType.Response ) {
            debugger;
            const art = event.body;
            this.articleStore.updateEntity(articleId, {...art} as ArticleInterface );
          }

        })
        );
      }


  deleteCourse(articleId: number): Observable<any> {
    return this.articleDataService.deleteArticle(articleId).pipe(
      tap((res) => {
        this.articleStore.remove(articleId);
      })
    );
  }

}
