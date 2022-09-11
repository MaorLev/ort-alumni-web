import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureExpansionPanelComponent } from './feature-expansion-panel.component';

describe('FeatureExpansionPanelComponent', () => {
  let component: FeatureExpansionPanelComponent;
  let fixture: ComponentFixture<FeatureExpansionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureExpansionPanelComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
