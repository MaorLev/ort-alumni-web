import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherContactModalComponent } from './teacher-contact-modal.component';

describe('TeacherContactModalComponent', () => {
  let component: TeacherContactModalComponent;
  let fixture: ComponentFixture<TeacherContactModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeacherContactModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherContactModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
