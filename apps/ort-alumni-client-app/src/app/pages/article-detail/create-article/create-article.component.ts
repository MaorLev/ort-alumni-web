import { ArticleInterface } from './../article.interface';
import { CategoryListConfigService } from './../article-form-config/category-list.config.service';
import { DetailConfig } from './../article-form-config/detail.config';
import { HeadingConfig } from './../article-form-config/heading.config';
import { Router } from '@angular/router';
import { ArticleService } from './../state/article.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SubheadingConfig } from '../article-form-config/subheading.config';
import { Observable, of } from 'rxjs';
import { HttpEventType } from '@angular/common/http';


@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateArticleComponent{

  progress:Observable<number> = of(0);

  articleForm = new FormGroup({
    heading: new FormControl(),
    subheading: new FormControl(),
    image: new FormControl(null, [Validators.required, requiredFileType('png')]),
    detail: new FormControl(),
    category: new FormControl(),
  });

  headingConfig = HeadingConfig;
  subheadingConfig = SubheadingConfig;
  detailConfig = DetailConfig;
  categoryConfig = this.categoryListConfig.CATEGORYLIST;

  constructor(private articleService: ArticleService, private router: Router,
    private categoryListConfig:CategoryListConfigService) {}

  onSubmit() {

    if (this.articleForm.valid) {
       const article:ArticleInterface = this.articleForm.value;
       article.categoryid = article.category?.id;

      this.articleService
        .createArticle(article)
        .subscribe(  event => {

          if ( event.type === HttpEventType.UploadProgress ) {
            this.progress = of(Math.round((100 * event.loaded) / (event.total ? event.total : 0) ));
          }

          if ( event.type === HttpEventType.Response ) {
            console.log(event.body);
            this.router.navigateByUrl(`main/article-detail/${event.body?.id}`);
          }

        });
    }
  }

  // (res) => {
  //   this.router.navigateByUrl('');
  // }


}
export function requiredFileType( type: string ) {
  return function (control: FormControl) {
    const file = control.value;
    if ( file ) {
      const extension = file.name.split('.')[1].toLowerCase();
      if ( type.toLowerCase() !== extension.toLowerCase() ) {
        return {
          requiredFileType: true
        };
      }

      return null;
    }

    return null;
  };
}


