import { ArticleFormConfigService } from '../article-form-config/article-form-config.service';

import { ArticleInterface } from '../state/article.interface';
import { Router } from '@angular/router';
import { ArticleService } from './../state/article.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { ortInput } from '@features/feature-va-input';
import { requiredFileType } from '@features/feature-file-upload';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ArticleFormConfigService]
})
export class CreateArticleComponent {

  articleConfig: Record<string, ortInput>;
  articleForm = new FormGroup({
    heading: new FormControl(null,[Validators.required, Validators.minLength(3) ]),
    subheading: new FormControl(),
    image: new FormControl(null,[Validators.required, requiredFileType(['png', 'jpg', 'jpeg'])]),
    detail: new FormControl(null, Validators.maxLength(2000)),
    category: new FormControl(null, Validators.required),
  });


  constructor(
    private articleService: ArticleService,
    private router: Router,
    articleConfigService: ArticleFormConfigService
  ) {
    this.articleConfig = articleConfigService.controls(false);
  }


  onSubmit() {
    console.log(this.articleForm.get('image')?.valid);
    if (this.articleForm.valid) {
      const article: ArticleInterface = this.articleForm.value;
      article.categoryid = article.category?.id;

      this.articleService.createArticle(article).subscribe((event) => {
        // if ( event.type === HttpEventType.UploadProgress ) {
        //   this.progress.pipe(map(res => Math.round((100 * event.loaded) / (event.total ? event.total : 0) )));
        // }

        if (event.type === HttpEventType.Response) {
          console.log(event.body);
          setTimeout(() => {
            this.router.navigateByUrl(`main/article-detail/${event.body?.id}`);
          }, 500);
        }
      });
    }
    this.articleForm.markAllAsTouched();
  }
}
