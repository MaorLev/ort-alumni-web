import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreRegisterationComponent } from './pre-registeration.component';

describe('PreRegisterationComponent', () => {
  let component: PreRegisterationComponent;
  let fixture: ComponentFixture<PreRegisterationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreRegisterationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreRegisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
