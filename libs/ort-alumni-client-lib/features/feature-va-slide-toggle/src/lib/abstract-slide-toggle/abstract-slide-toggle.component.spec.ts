import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractSlideToggleComponent } from './abstract-slide-toggle.component';

describe('AbstractSlideToggleComponent', () => {
  let component: AbstractSlideToggleComponent;
  let fixture: ComponentFixture<AbstractSlideToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbstractSlideToggleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractSlideToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
