import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractRadioComponent } from './abstract-radio.component';

describe('AbstractRadioComponent', () => {
  let component: AbstractRadioComponent;
  let fixture: ComponentFixture<AbstractRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbstractRadioComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
