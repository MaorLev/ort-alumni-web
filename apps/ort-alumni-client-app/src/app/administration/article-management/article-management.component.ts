import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import {
  Observable,
  Subject,
  debounceTime,
  distinctUntilChanged,
  startWith,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs';
import { ArticleInterface } from '../../pages/article/state/article.interface';
import { Router } from '@angular/router';
import { ArticleService } from '../../pages/article/state/article.service';
import { FormControl } from '@angular/forms';
import { CategoryInterface } from '../../pages/article/state/category.interface';
import { ArticlesCategoryViewType } from '../../pages/article/state/category-hashmap';

@Component({
  selector: 'app-article-management',
  templateUrl: './article-management.component.html',
  styleUrls: ['./article-management.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleManagementComponent implements OnInit, OnDestroy {

  articles$: Observable<ArticleInterface[]>;
  searchControl: FormControl;
  radio: FormControl;
  categories: Observable<CategoryInterface[]>;
  get cType(): typeof ArticlesCategoryViewType {
    return ArticlesCategoryViewType;
  }

  headers: string[];

  onDestroy$: Subject<void>;

  constructor(private articleService: ArticleService, private router: Router) {
    this.searchControl = new FormControl();
    this.radio = new FormControl();
    this.articles$ = this.articleService.selectAllArticles(15);
    this.categories = this.articleService.selectAllCategories();
    this.onDestroy$ = new Subject();
    this.headers = [
      'מזהה',
      'מחבר',
      'כותרת',
      'תאריך',
      'קטגוריה',
      'עריכה',
      'מחיקה',
    ];
  }

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles() {
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

  onDeleteArticle(articleId: string) {
    this.articleService
      .deleteArticle(parseInt(articleId))
      .pipe(takeUntil(this.onDestroy$))
      .subscribe();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }
}
