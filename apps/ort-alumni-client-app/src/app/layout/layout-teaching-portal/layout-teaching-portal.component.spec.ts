import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTeachingPortalComponent } from './layout-teaching-portal.component';

describe('LayoutTeachingPortalComponent', () => {
  let component: LayoutTeachingPortalComponent;
  let fixture: ComponentFixture<LayoutTeachingPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutTeachingPortalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutTeachingPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
