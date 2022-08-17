import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractPhoneComponent } from './abstract-phone.component';

describe('AbstractPhoneComponent', () => {
  let component: AbstractPhoneComponent;
  let fixture: ComponentFixture<AbstractPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbstractPhoneComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
