import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractSelectAutoCompleteComponent } from './abstract-select-auto-complete.component';

describe('AbstractSelectAutoCompleteComponent', () => {
  let component: AbstractSelectAutoCompleteComponent;
  let fixture: ComponentFixture<AbstractSelectAutoCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbstractSelectAutoCompleteComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractSelectAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
