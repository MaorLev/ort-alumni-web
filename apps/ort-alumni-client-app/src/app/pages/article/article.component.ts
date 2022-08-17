import { ArticleInterface } from './state/article.interface';
import { Observable, Subscription, combineLatest } from 'rxjs';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import { ArticleService } from './state/article.service';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { CategoryInterface } from './state/category.interface';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleComponent implements OnInit, OnDestroy {
  articles$: Observable<ArticleInterface[]>;
  subs = new Subscription();
  searchControl: FormControl;
  radio: FormControl;
  categories: Observable<CategoryInterface[]>;
  constructor(
    private articleService: ArticleService,
    private changeDetector: ChangeDetectorRef
  ) {
    this.searchControl = new FormControl();
    this.radio = new FormControl();
    this.articles$ = this.articleService.selectAllArticles(15);
    this.categories = this.articleService.selectAllCategories();
  }

  ngOnInit(): void {
    this.subs = combineLatest([
      this.searchControl.valueChanges,
      this.radio.valueChanges,
    ])
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe(([query, radio]) => {
        this.articles$ = this.articleService.filtered(query, 12, radio);
        this.changeDetector.detectChanges();
      });

    this.radio.patchValue(2);
  }
  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
