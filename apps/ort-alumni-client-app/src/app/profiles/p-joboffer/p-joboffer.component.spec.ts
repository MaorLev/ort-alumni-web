import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PJobofferComponent } from './p-joboffer.component';

describe('PJobofferComponent', () => {
  let component: PJobofferComponent;
  let fixture: ComponentFixture<PJobofferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PJobofferComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PJobofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
