import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturePaginatorComponent } from './feature-paginator.component';

describe('FeaturePaginatorComponent', () => {
  let component: FeaturePaginatorComponent;
  let fixture: ComponentFixture<FeaturePaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeaturePaginatorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturePaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
