import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractDatePickerComponent } from './abstract-date-picker.component';

describe('AbstractDatePickerComponent', () => {
  let component: AbstractDatePickerComponent;
  let fixture: ComponentFixture<AbstractDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbstractDatePickerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
