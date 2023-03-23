import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAlumnusComponent } from './profile-alumnus.component';

describe('ProfileAlumnusComponent', () => {
  let component: ProfileAlumnusComponent;
  let fixture: ComponentFixture<ProfileAlumnusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileAlumnusComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAlumnusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
