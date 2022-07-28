import { ArticleService } from './../state/article.service';
import { ArticleQuery } from '../state/article.query';
import { Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleInterface } from '../state/article.interface';
import { AlertsService } from '@utils/core';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleDetailComponent implements OnInit {
  id: number;
  article: Observable<ArticleInterface | undefined>;

  constructor(
    activatedRouter: ActivatedRoute,
    private articleService: ArticleService,
    private articleQuery: ArticleQuery,
    private router: Router,
    private alertsService: AlertsService
  ) {
    const id = activatedRouter.snapshot.paramMap.get('id');
    if (id) this.id = parseInt(id);
  }

  ngOnInit(): void {
    this.article = this.articleQuery.selectEntity(this.id);
    // const articles:ArticleInterface [] = ArticlesData;
    // this.article = of(
    //   ...articles.filter((article)=> article.id?.toString() === this.id)
    // )
  }

  onDeleteArticle() {
    this.articleService.deleteArticle(this.id).subscribe({
      next: () => {
        this.router.navigate(['../../']);
        this.alertsService.dynamicAlert('Removed article successfully');
      },
      error: (err) => {
        console.error(err.message);
      },
    });
  }
}
