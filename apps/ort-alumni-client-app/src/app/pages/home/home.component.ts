import { CategoryInterface } from './../article/state/category.interface';
import { ArticleService } from './../article/state/article.service';
import { ArticleInterface } from '../article/state/article.interface';

import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';

import {
  Observable
} from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit{
  articles$: Observable<ArticleInterface[]>;
  articlesByCategory$: Observable<CategoryInterface[]>;

  constructor(
    public articleService: ArticleService
  ) {

  }
  ngOnInit(): void {

    this.articlesByCategory$ = this.articleService.selectArticlesViaCategoriesByLimit(5);

  }


}
