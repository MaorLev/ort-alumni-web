import { TestBed } from '@angular/core/testing';

import { ModalMenuRoutesService } from './modal-menu-routes.service';

describe('ModalMenuRoutesService', () => {
  let service: ModalMenuRoutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalMenuRoutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
