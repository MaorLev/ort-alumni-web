import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VAInputComponent } from './va-input.component';

describe('InputComponent', () => {
  let component: VAInputComponent;
  let fixture: ComponentFixture<VAInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VAInputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VAInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
