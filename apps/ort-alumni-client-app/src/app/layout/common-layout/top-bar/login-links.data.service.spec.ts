import { TestBed } from '@angular/core/testing';

import { LoginLinksDataService } from './login-links.data.service';

describe('LoginLinks.DataService', () => {
  let service: LoginLinksDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginLinksDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
