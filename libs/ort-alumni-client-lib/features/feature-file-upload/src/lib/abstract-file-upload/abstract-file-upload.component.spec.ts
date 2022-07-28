import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractFileUploadComponent } from './abstract-file-upload.component';

describe('AbstractFileUploadComponent', () => {
  let component: AbstractFileUploadComponent;
  let fixture: ComponentFixture<AbstractFileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbstractFileUploadComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
