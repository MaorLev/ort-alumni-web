import { ArticleInterface } from './article.interface';
import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { CategoryInterface } from './category.interface';
import { produce } from 'immer';


export interface ArticlesState extends EntityState<ArticleInterface, number> {
  areArticlesLoaded: boolean;
  categories: CategoryInterface[];

}

export function createInitialState(): ArticlesState {
  return {
    areArticlesLoaded: false,
    categories: [
    ]
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'articles', producerFn: produce })
export class ArticleStore extends EntityStore<ArticlesState> {
  constructor() {
    super(createInitialState());
  }


  updateEntity = (id: number, entity: ArticleInterface): void =>
    this.update(id, entity);


  loadArticles(
    articles: ArticleInterface[],
    categories: CategoryInterface[],
    areArticlesLoaded: boolean
  ) {
    this.set(articles);
    this.update((state) => ({
      ...state,
      areArticlesLoaded,
      categories
    }));
  }
}
