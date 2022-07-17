import { ArticleQuery } from './../state/article.query';
import { Injectable } from '@angular/core';
import { ortInput } from '@features/feature-va-input';

@Injectable({
  providedIn: 'root',
})
export class CategoryListConfigService {
  constructor(private articleService:ArticleQuery) {}

  public CATEGORYLIST: ortInput = {
    name: 'category',
    label: 'קטגוריה',
    type: '',
    placeholder: 'בחר קטגוריה',
    data: {
      isMultiple: false,
      options: this.articleService.getValue().categories,
    },
    validators: {
      isRequired: true,
    },
    errors: [
      {
        name: 'required',
        message: 'שדה חובה',
      },
    ],
  };

  private getOptionsMockDropSelect(): string[] {
    const options: any[] = [
      { name: 'אונליין', id: 1 },
      { name: 'ירושלים', id: 2 },
      { name: 'בית מאיר', id: 3 },
      // { name: 'Fox', id: 4 },
    ];
    return options;
  }
}
