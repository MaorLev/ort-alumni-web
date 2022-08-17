import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaPhoneComponent } from './va-phone.component';

describe('VaPhoneComponent', () => {
  let component: VaPhoneComponent;
  let fixture: ComponentFixture<VaPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VaPhoneComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
