import { TestBed } from '@angular/core/testing';

import { ArticleDataService } from './article.data.service';

describe('Article.DataService', () => {
  let service: ArticleDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
