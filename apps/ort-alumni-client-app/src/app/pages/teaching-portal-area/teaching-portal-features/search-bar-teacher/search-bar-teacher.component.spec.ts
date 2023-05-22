import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarTeacherComponent } from './search-bar-teacher.component';

describe('SearchBarTeacherComponent', () => {
  let component: SearchBarTeacherComponent;
  let fixture: ComponentFixture<SearchBarTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchBarTeacherComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
