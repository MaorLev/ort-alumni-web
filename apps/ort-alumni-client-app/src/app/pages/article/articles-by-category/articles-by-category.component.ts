import { CategoryInterface } from '../state/category.interface';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ArticleService } from '../state/article.service';
import { HashCategoryNameToId } from '../state/category-hashmap';
@Component({
  selector: 'app-articles-by-category',
  templateUrl: './articles-by-category.component.html',
  styleUrls: ['./articles-by-category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesByCategoryComponent implements OnInit {
  articlesByCategory$: Observable<CategoryInterface[]>;
  categoryName: string | null = null;
  constructor(
    public articleService: ArticleService,
    activateRouter: ActivatedRoute
  ) {
    const name = activateRouter.snapshot.paramMap.get('id');
    if (name) this.categoryName = name;
  }

  ngOnInit(): void {
    debugger;
    if (this.categoryName === null) {
      this.articlesByCategory$ =
        this.articleService.selectArticlesViaCategoriesByLimit(10);
    } else {
      this.articlesByCategory$ = this.articleService
        .selectArticlesViaCategoryByLimit(
          HashCategoryNameToId[this.categoryName as string],
          10
        )
        .pipe(
          map((res) => {
            const arr: CategoryInterface[] = [];
            arr.push(res);
            return arr;
          })
        );
    }
  }
}
