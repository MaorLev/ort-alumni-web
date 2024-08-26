import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { ArticleInterface } from '../state/article.interface';

@Component({
  selector: 'app-articles-cards',
  templateUrl: './articles-cards.component.html',
  styleUrls: ['./articles-cards.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesCardsComponent {
  @Input() article: ArticleInterface | undefined;
  @Input() style: string;

  constructor() {
    this.style = '';
    this.article = {
      heading: '',
      subheading: '',

      img: '',

      detail: '',
      author: '',
    };
  }
}
