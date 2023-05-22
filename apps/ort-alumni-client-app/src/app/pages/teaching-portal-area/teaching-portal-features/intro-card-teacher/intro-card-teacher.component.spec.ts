import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroCardTeacherComponent } from './intro-card-teacher.component';

describe('IntroCardTeacherComponent', () => {
  let component: IntroCardTeacherComponent;
  let fixture: ComponentFixture<IntroCardTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntroCardTeacherComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroCardTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
