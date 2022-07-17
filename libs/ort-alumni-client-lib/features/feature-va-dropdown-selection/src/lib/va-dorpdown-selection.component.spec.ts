import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaDorpdownSelectionComponent } from './va-dorpdown-selection.component';

describe('VaDorpdownSelectionComponent', () => {
  let component: VaDorpdownSelectionComponent;
  let fixture: ComponentFixture<VaDorpdownSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VaDorpdownSelectionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaDorpdownSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
