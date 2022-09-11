import { TestBed } from '@angular/core/testing';

import { LoadingGoogleApiService } from './loading-google-api.service';

describe('LoadingGoogleApiService', () => {
  let service: LoadingGoogleApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingGoogleApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
