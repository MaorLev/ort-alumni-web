
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
import { requiredFileType } from '../create-article/create-article.component';
import { HttpEventType } from '@angular/common/http';
import { CATEGORYSELECTION } from '../article-form-config/category-selection';


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
  categoryConfig = CATEGORYSELECTION;
  progress:Observable<number> = of(0);
  constructor(
    private activatedRouter: ActivatedRoute,
    private articleService: ArticleService,
    private articleQuary: ArticleQuery,
    private router: Router,
    private formBuilder: FormBuilder
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
      img: [null, [ requiredFileType(['png', 'jpg', 'jpeg'])]],
      detail: [this.article?.detail,[]],
      category: [this.article?.category,[]],
    });
  }

  onSubmit() {
    debugger;
    if (this.articleForm.valid) {
      const art:ArticleInterface = this.articleForm.value;
      art.id = this.article?.id;
      art.categoryid = art.category?.id;
      this.articleService
        .updateArticle(this.usableId, art)
        .subscribe(event => {

          if ( event.type === HttpEventType.UploadProgress ) {
            this.progress = of(Math.round((100 * event.loaded) / (event.total ? event.total : 0) ));
          }

          if ( event.type === HttpEventType.Response ) {
            console.log(event.body);
            this.router.navigateByUrl(`main/article-detail/${this.usableId}`);
          }

        });
    }
  }

}
