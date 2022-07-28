import { ArticleQuery } from './../state/article.query';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
export class UpdateArticleComponent implements OnInit {
  article: ArticleInterface | undefined;
  id: number;
  articleConfig: Record<string, ortInput>;

  constructor(
    activatedRouter: ActivatedRoute,
    private articleService: ArticleService,
    private articleQuary: ArticleQuery,
    private router: Router,
    private articleConfigService: ArticleFormConfigService
  ) {
    const id = activatedRouter.snapshot.paramMap.get('id');
    if (id) this.id = parseInt(id);
    this.article = this.articleQuary.getEntitySnapshot(this.id);
  }
  ngOnInit(): void {
    this.articleConfig = this.articleConfigService.controls(
      true,
      this.article?.originalimgname
    );
  }

  onSubmit(articleForm: FormGroup) {
    if (articleForm.valid) {
      const art: ArticleInterface = articleForm.value;
      art.id = this.article?.id;
      art.categoryid = art.category?.id;
      this.articleService.updateArticle(this.id, art).subscribe((event) => {
        if (event.type === HttpEventType.Response) {
          this.router.navigateByUrl(`main/article-detail/${this.id}`);
        }
      });
    }
  }
}
