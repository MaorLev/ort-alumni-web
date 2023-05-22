import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureExpandHeaderPanelComponent } from './feature-expand-header-panel.component';

describe('FeatureExpandHeaderPanelComponent', () => {
  let component: FeatureExpandHeaderPanelComponent;
  let fixture: ComponentFixture<FeatureExpandHeaderPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureExpandHeaderPanelComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureExpandHeaderPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
