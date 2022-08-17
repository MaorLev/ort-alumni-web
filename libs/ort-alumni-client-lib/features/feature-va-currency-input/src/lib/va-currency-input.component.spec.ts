import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaCurrencyInputComponent } from './va-currency-input.component';

describe('VaCurrencyInputComponent', () => {
  let component: VaCurrencyInputComponent;
  let fixture: ComponentFixture<VaCurrencyInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VaCurrencyInputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaCurrencyInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
