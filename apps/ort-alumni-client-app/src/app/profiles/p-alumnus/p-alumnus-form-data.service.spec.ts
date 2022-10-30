import { TestBed } from '@angular/core/testing';

import { PAlumnusFormData } from './p-alumnus-form-data.service';

describe('PAlumnusFormDataService', () => {
  let service: PAlumnusFormData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PAlumnusFormData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
