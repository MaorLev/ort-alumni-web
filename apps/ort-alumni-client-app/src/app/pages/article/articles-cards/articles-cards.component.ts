import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ArticleInterface } from '../state/article.interface';

@Component({
  selector: 'app-articles-cards',
  templateUrl: './articles-cards.component.html',
  styleUrls: ['./articles-cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesCardsComponent {

  @Input() articles:ArticleInterface[] | undefined;
  @Input() style:string;
  
  constructor() {
    this.style = '';
    this.articles = [];
  }
}
