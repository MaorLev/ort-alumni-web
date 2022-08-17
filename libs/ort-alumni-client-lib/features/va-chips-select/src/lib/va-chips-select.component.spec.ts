import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaChipsSelectComponent } from './va-chips-select.component';

describe('VaChipsSelectComponent', () => {
  let component: VaChipsSelectComponent;
  let fixture: ComponentFixture<VaChipsSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VaChipsSelectComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaChipsSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
