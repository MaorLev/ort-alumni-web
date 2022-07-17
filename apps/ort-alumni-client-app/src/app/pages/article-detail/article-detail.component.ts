import { environment } from '@environments';
import { ArticleQuery } from './state/article.query';
import { Observable} from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleInterface } from './article.interface';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleDetailComponent implements OnInit {
  id: string | null;
  article:Observable<ArticleInterface | undefined>;
  env = environment.endPointApi + "/";
  constructor(activatedRouter: ActivatedRoute, private articleQuery:ArticleQuery) {
    this.id = activatedRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {

    this.article = this.articleQuery.selectEntity((parseInt(this.id as string))) ;
    // const articles:ArticleInterface [] = ArticlesData;
    // this.article = of(
    //   ...articles.filter((article)=> article.id?.toString() === this.id)
    // )
  }
}
