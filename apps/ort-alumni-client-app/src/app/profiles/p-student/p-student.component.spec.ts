import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PStudentComponent } from './p-student.component';

describe('PStudentComponent', () => {
  let component: PStudentComponent;
  let fixture: ComponentFixture<PStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PStudentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
