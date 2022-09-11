import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureExpansionPanelNodeComponent } from './feature-expansion-panel-node.component';

describe('FeatureExpansionPanelNodeComponent', () => {
  let component: FeatureExpansionPanelNodeComponent;
  let fixture: ComponentFixture<FeatureExpansionPanelNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureExpansionPanelNodeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureExpansionPanelNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
