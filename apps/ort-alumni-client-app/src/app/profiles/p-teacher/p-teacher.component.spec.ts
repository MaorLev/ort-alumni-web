import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PTeacherComponent } from './p-teacher.component';

describe('PTeacherComponent', () => {
  let component: PTeacherComponent;
  let fixture: ComponentFixture<PTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PTeacherComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
