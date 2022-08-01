import { Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Observable, switchMap, mergeMap } from 'rxjs';
import { ArticleQuery } from './../state/article.query';
import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ArticleInterface } from '../state/article.interface';
import { ArticleService } from '../state/article.service';

import { HttpEventType } from '@angular/common/http';

import { ortInput } from '@features/feature-va-input';

import { ArticleFormConfigService } from '../article-form-config/article-form-config.service';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ArticleFormConfigService],
})
export class UpdateArticleComponent implements OnInit, OnDestroy {
  article: Observable<ArticleInterface | undefined>;
  id: number;
  articleConfig: Record<string, ortInput>;
 subscription = new Subscription();
  constructor(
    activatedRouter: ActivatedRoute,
    private articleService: ArticleService,
    private articleQuery: ArticleQuery,
    private router: Router,
    private articleConfigService: ArticleFormConfigService
  ) {
    const id = activatedRouter.snapshot.paramMap.get('id');
    debugger;
    if (id) this.id = parseInt(id);
    this.article = this.articleQuery.selectAreArticlesLoaded$.pipe(
      mergeMap((areArticlesLoaded) => {
        if (!areArticlesLoaded) {
          articleService.LoadArticlesAndCategories().subscribe(() => {
            return this.articleQuery.selectEntity(this.id);
          });
        }
        return this.articleQuery.selectEntity(this.id);
      })
    )
  }
  ngOnInit(): void {
    this.subscription = this.article.subscribe((article) => {

      this.articleConfig = this.articleConfigService.controls(
        true,
        article?.originalimgname
      );
    })
  }

  onSubmit(articleForm: FormGroup) {
    if (articleForm.valid) {
      const art: ArticleInterface = articleForm.value;
      art.id = this.id;
      art.categoryid = art.category?.id;
      this.articleService.updateArticle(this.id, art).subscribe((event) => {
        if (event.type === HttpEventType.Response) {
          this.router.navigateByUrl(`main/article-detail/${this.id}`);
        }
      });
    }
  }
  ngOnDestroy(): void {
    if(this.subscription)
    this.subscription.unsubscribe();
  }
}
