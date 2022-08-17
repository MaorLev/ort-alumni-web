import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractChipsSelectComponent } from './abstract-chips-select.component';

describe('AbstractChipsSelectComponent', () => {
  let component: AbstractChipsSelectComponent;
  let fixture: ComponentFixture<AbstractChipsSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbstractChipsSelectComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractChipsSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
