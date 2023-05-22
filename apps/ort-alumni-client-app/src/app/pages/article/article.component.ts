import { ArticleInterface } from './state/article.interface';
import { Observable } from 'rxjs';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { ArticleService } from './state/article.service';
import { FormControl } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  startWith,
  switchMap
} from 'rxjs/operators';
import { CategoryInterface } from './state/category.interface';
import { ArticlesCategoryViewType } from './state/category-hashmap';



@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleComponent implements OnInit {
  articles$: Observable<ArticleInterface[]>;
  searchControl: FormControl;
  radio: FormControl;
  categories: Observable<CategoryInterface[]>;
  get cType():typeof ArticlesCategoryViewType { return ArticlesCategoryViewType}


  constructor(
    private articleService: ArticleService
  ) {
    this.searchControl = new FormControl();
    this.radio = new FormControl();
    this.articles$ = this.articleService.selectAllArticles(15);
    this.categories = this.articleService.selectAllCategories();
  }

  ngOnInit(): void {
    this.articles$ = this.searchControl.valueChanges.pipe(
      startWith(''),
      distinctUntilChanged(),
      debounceTime(400),
      switchMap((input) => {
        return this.articleService.filtered(input, 12, this.radio.value);
      })
    );
    this.radio.patchValue(this.cType.All);
  }

}
