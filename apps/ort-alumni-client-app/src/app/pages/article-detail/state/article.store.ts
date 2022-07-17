import { ArticleInterface } from './../article.interface';
import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { CategoryInterface } from './category.interface';

export interface ArticlesState extends EntityState<ArticleInterface, number> {
  areArticlesLoaded: boolean;
  categories:CategoryInterface [];
}

export function createInitialState(): ArticlesState  {
  return {
    areArticlesLoaded: false,
    categories: []
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'articles' })
export class ArticleStore extends EntityStore<ArticlesState> {

  constructor() {
    super(createInitialState());
  }

  loadArticles(articles: ArticleInterface[],categories: CategoryInterface [], areArticlesLoaded: boolean) {
    this.set(articles);
    this.update(state => ({
      ...state,
      areArticlesLoaded,
      categories
    }));
  }
}
