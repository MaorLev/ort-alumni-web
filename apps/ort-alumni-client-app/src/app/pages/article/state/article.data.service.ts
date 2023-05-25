import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments';
import { Observable } from 'rxjs';
import { toFormData } from '@utils/util-tools';
import { ArticleInterface } from './article.interface';
import { CategoryInterface } from './category.interface';

@Injectable({
  providedIn: 'root',
})
export class ArticleDataService {
  endPoint: string = environment.endPointApi;
  constructor(private httpClient: HttpClient) {}

  getAllArticles(): Observable<ArticleInterface[]> {
    return this.httpClient.get<ArticleInterface[]>(this.endPoint + `/article`);
  }
  getAllCategories(): Observable<CategoryInterface[]> {
    return this.httpClient.get<CategoryInterface[]>(
      this.endPoint + `/category`
    );
  }


  createArticle(
    article: ArticleInterface
  ): Observable<HttpEvent<ArticleInterface>> {
    return this.httpClient.post<ArticleInterface>(
      this.endPoint + '/article',
      toFormData(article),
      {
        reportProgress: true,
        observe: 'events',
      }
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deleteArticle(articleId: number): Observable<any> {
    return this.httpClient.delete(this.endPoint + '/article/' + articleId);
  }

  updateArticle(
    articleId: number,
    article: ArticleInterface
  ): Observable<HttpEvent<ArticleInterface>> {
    return this.httpClient.put<ArticleInterface>(
      this.endPoint + '/article/' + articleId,
      toFormData(article),
      {
        reportProgress: true,
        observe: 'events',
      }
    );
  }
}
