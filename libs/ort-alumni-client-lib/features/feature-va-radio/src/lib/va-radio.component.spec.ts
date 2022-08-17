import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaRadioComponent } from './va-radio.component';

describe('VaRadioComponent', () => {
  let component: VaRadioComponent;
  let fixture: ComponentFixture<VaRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VaRadioComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
