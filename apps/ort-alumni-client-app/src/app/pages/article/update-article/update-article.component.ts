import { ArticleQuery } from './../state/article.query';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ArticleInterface } from '../state/article.interface';
import { ArticleService } from '../state/article.service';

import { HttpEventType } from '@angular/common/http';

import { cloneDeep } from '@utils/helpers';
import { ArticleFormConfigService } from '../article-form-config/article-form-config.service';
import { ortInput } from '@features/feature-va-input';
import { requiredFileType } from '@features/feature-file-upload';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ArticleFormConfigService],
})
export class UpdateArticleComponent implements OnInit {
  // articleForm: FormGroup;
  article: ArticleInterface | undefined;
  id: number;


  articleConfig: Record<string, ortInput>;
  articleForm = new FormGroup({
    heading: new FormControl(null,[Validators.required, Validators.minLength(3) ]),
    subheading: new FormControl(),
    image: new FormControl(null, requiredFileType(['png', 'jpg', 'jpeg']) as ValidatorFn),
    detail: new FormControl(null, Validators.maxLength(2000)),
    category: new FormControl(null, Validators.required),
  });
  constructor(
    private activatedRouter: ActivatedRoute,
    private articleService: ArticleService,
    private articleQuary: ArticleQuery,
    private router: Router,
    articleConfigService: ArticleFormConfigService
  ) {
    const id = activatedRouter.snapshot.paramMap.get('id');
    if (id) this.id = parseInt(id);
    this.article = this.articleQuary.getEntitySnapshot(this.id);
    this.articleConfig = articleConfigService.controls(true);
  }
  ngOnInit(): void {
    this.articleForm.patchValue({ ...this.article });
  }

  onSubmit() {

    if (this.articleForm.valid) {
      const art: ArticleInterface = this.articleForm.value;
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
