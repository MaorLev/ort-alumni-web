import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractSelectComponent } from './abstract-select.component';

describe('AbstractSelectComponent', () => {
  let component: AbstractSelectComponent;
  let fixture: ComponentFixture<AbstractSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbstractSelectComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
