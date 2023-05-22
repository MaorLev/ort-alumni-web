import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingPortalComponent } from './teaching-portal.component';

describe('TeachingPortalComponent', () => {
  let component: TeachingPortalComponent;
  let fixture: ComponentFixture<TeachingPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeachingPortalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
