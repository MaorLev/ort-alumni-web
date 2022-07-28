import { ArticleFormConfigService } from '../article-form-config/article-form-config.service';

import { ArticleInterface } from '../state/article.interface';
import { Router } from '@angular/router';
import { ArticleService } from './../state/article.service';
import { FormGroup } from '@angular/forms';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HttpEventType } from '@angular/common/http';
import { ortInput } from '@features/feature-va-input';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ArticleFormConfigService],
})
export class CreateArticleComponent {
  articleConfig: Record<string, ortInput>;

  constructor(
    private articleService: ArticleService,
    private router: Router,
    articleConfigService: ArticleFormConfigService
  ) {
    this.articleConfig = articleConfigService.controls(false);
  }

  onSubmit(articleForm: FormGroup) {
    console.log(articleForm.get('image')?.valid);
    if (articleForm.valid) {
      const article: ArticleInterface = articleForm.value;
      article.categoryid = article.category?.id;

      this.articleService.createArticle(article).subscribe((event) => {
        if (event.type === HttpEventType.Response) {
          console.log(event.body);
          setTimeout(() => {
            this.router.navigateByUrl(`main/article-detail/${event.body?.id}`);
          }, 500);
        }
      });
    }
    articleForm.markAllAsTouched();
  }
}
