import { TestBed } from '@angular/core/testing';

import { Article.DataService } from './article.data.service';

describe('Article.DataService', () => {
  let service: Article.DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Article.DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
