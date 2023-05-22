
import { Injectable } from '@angular/core';
import { FormInterface } from '@features/feature-form';

import { ArticleService } from '../state/article.service';
import { ArticleControls } from './article-controls';
import { CategoryInterface } from '../state/category.interface';

@Injectable()
export class ArticleFormConfigService {
  constructor(private articleService: ArticleService) {}
  controls(isUpdate: boolean, imageNameBefore?: string): FormInterface {
    return {
      groupName: 'articles',
      buttons: [
        { label: isUpdate ? 'עדכן' : 'צור', type: 'submit', className: 'btn' },
      ],
      controls: {
        author: ArticleControls.Author(),
        heading: ArticleControls.Heading(),
        subheading: ArticleControls.SubHeading(),

        category: ArticleControls.Category(
          this.articleService.getSimpleAllCategories()
        ),
        detail: ArticleControls.Detail(),
        image: ArticleControls.Image(
          isUpdate,
          imageNameBefore ? imageNameBefore : ''
        ),
      },
      controlsWidthClass: 'fullWidth',
    };
  }
}
