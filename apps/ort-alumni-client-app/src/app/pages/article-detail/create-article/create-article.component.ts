import { ArticleInterface } from './../article.interface';
import { DetailConfig } from './../article-form-config/detail.config';
import { HeadingConfig } from './../article-form-config/heading.config';
import { Router } from '@angular/router';
import { ArticleService } from './../state/article.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SubheadingConfig } from '../article-form-config/subheading.config';
import { Observable, of, map } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { CATEGORYSELECTION } from '../article-form-config/category-selection';


@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateArticleComponent{

  progress:Observable<number>;

  articleForm = new FormGroup({
    heading: new FormControl(),
    subheading: new FormControl(),
    image: new FormControl(null, [Validators.required, requiredFileType(['png', 'jpg', 'jpeg'])]),
    detail: new FormControl(),
    category: new FormControl(),
  });

  headingConfig = HeadingConfig;
  subheadingConfig = SubheadingConfig;
  detailConfig = DetailConfig;
  categoryConfig = CATEGORYSELECTION;

  constructor(private articleService: ArticleService, private router: Router) {}

  onSubmit() {
    console.log(this.articleForm.get("image")?.valid);
    debugger;
    if (this.articleForm.valid) {
       const article:ArticleInterface = this.articleForm.value;
       article.categoryid = article.category?.id;

      this.articleService
        .createArticle(article)
        .subscribe(event => {

          if ( event.type === HttpEventType.UploadProgress ) {
            this.progress.pipe(map(res => Math.round((100 * event.loaded) / (event.total ? event.total : 0) )));
          }

          if ( event.type === HttpEventType.Response ) {
            console.log(event.body);
            setTimeout(() => {
              this.router.navigateByUrl(`main/article-detail/${event.body?.id}`);
            }, 3000);

          }

        });
    }
    this.articleForm.markAllAsTouched();
  }

  // (res) => {
  //   this.router.navigateByUrl('');
  // }


}
export function requiredFileType( types: string [] ) {
  return function (control: FormControl) {
    const file = control.value;
    if ( file ) {
      const extension = file.name.split('.')[1].toLowerCase();
      for (let index = 0; index < types.length; index++) {
        if ( types[index].toLowerCase() === extension.toLowerCase() ) {
          return null;
        }

      }

      return {
        requiredFileType: true
      };
    }

    return null;
  };
}


