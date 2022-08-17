import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaSelectAutoCompleteComponent } from './va-select-auto-complete.component';

describe('VaSelectAutoCompleteComponent', () => {
  let component: VaSelectAutoCompleteComponent;
  let fixture: ComponentFixture<VaSelectAutoCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VaSelectAutoCompleteComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaSelectAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
