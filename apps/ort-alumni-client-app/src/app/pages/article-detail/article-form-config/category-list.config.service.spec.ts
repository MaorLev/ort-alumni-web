import { TestBed } from '@angular/core/testing';

import { CategoryList.ConfigService } from './category-selection';

describe('CategoryList.ConfigService', () => {
  let service: CategoryList.ConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryList.ConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
