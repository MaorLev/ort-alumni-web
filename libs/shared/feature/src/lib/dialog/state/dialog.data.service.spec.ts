import { TestBed } from '@angular/core/testing';

import { Dialog.DataService } from './dialog.data.service';

describe('Dialog.DataService', () => {
  let service: Dialog.DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dialog.DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
