import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ArticlesState, ArticleStore } from './article.store';

@Injectable({ providedIn: 'root' })
export class ArticleQuery extends QueryEntity<ArticlesState> {

  selectAreArticlesLoaded$ = this.select(state => {
    return state.areArticlesLoaded;
  });


  getEntitySnapshot = (id:number) => this.getEntity(id);
  constructor(protected override store: ArticleStore) {
    super(store);
  }

}
