import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractCurrencyInputComponent } from './abstract-currency-input.component';

describe('AbstractCurrencyInputComponent', () => {
  let component: AbstractCurrencyInputComponent;
  let fixture: ComponentFixture<AbstractCurrencyInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbstractCurrencyInputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractCurrencyInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
