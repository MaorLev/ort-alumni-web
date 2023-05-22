import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureNavigationComponent } from './feature-navigation.component';

describe('FeatureNavigationComponent', () => {
  let component: FeatureNavigationComponent;
  let fixture: ComponentFixture<FeatureNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureNavigationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
