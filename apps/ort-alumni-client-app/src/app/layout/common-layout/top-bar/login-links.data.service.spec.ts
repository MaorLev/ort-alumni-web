import { TestBed } from '@angular/core/testing';

import { LoginLinksConfigService } from './login-links.config.service';

describe('LoginLinks.DataService', () => {
  let service: LoginLinksConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginLinksConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
