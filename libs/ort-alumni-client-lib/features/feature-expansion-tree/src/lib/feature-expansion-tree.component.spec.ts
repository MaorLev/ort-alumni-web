import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureExpansionTreeComponent } from './feature-expansion-tree.component';

describe('FeatureExpansionTreeComponent', () => {
  let component: FeatureExpansionTreeComponent;
  let fixture: ComponentFixture<FeatureExpansionTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureExpansionTreeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureExpansionTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
