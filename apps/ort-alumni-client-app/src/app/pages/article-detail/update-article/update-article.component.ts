import { environment } from '@environments';
import { ArticleQuery } from './../state/article.query';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { ArticleInterface } from '../article.interface';
import { ArticleService } from '../state/article.service';
import { HeadingConfig } from '../article-form-config/heading.config';
import { SubheadingConfig } from '../article-form-config/subheading.config';
import { DetailConfig } from '../article-form-config/detail.config';
import { CategoryListConfigService } from '../article-form-config/category-list.config.service';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateArticleComponent implements OnInit {
  updateArticleSub: Subscription;
  articleForm: FormGroup;
  article: ArticleInterface | undefined;
  id: string | null;
  usableId: number;
  endPoint = environment.endPointApi;
  headingConfig = HeadingConfig;
  subheadingConfig = SubheadingConfig;
  detailConfig = DetailConfig;
  categoryConfig = this.categoryListConfig.CATEGORYLIST;
  progress:Observable<number> = of(0);
  constructor(
    private activatedRouter: ActivatedRoute,
    private articleService: ArticleService,
    private articleQuary: ArticleQuery,
    private router: Router,
    private formBuilder: FormBuilder,
    private categoryListConfig:CategoryListConfigService
  ) {
    this.id = activatedRouter.snapshot.paramMap.get('id');
    if (this.id) this.usableId = parseInt(this.id);
    this.article = this.articleQuary.getEntitySnapshot(this.usableId);
    // this.article == this.articleQuary.getEntity(1);
  }
  ngOnInit(): void {
    this.articleForm = this.formBuilder.group({
      heading: [this.article?.heading,[]],
      subheading: [this.article?.subheading,[]],
      date: [this.article?.date,[]],
      img: [],
      detail: [this.article?.detail,[]],
      category: [this.article?.categoryid,[]],
    });
  }

  onSubmit() {
    if (this.articleForm.valid) {
      this.articleService
        .updateArticle(this.usableId, this.articleForm.value)
        .subscribe((res) => {
          this.router.navigateByUrl('');
        });
    }
  }

}
