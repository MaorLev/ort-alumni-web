import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiDeckCardComponent } from './ui-deck-card.component';

describe('UiDeckCardComponent', () => {
  let component: UiDeckCardComponent;
  let fixture: ComponentFixture<UiDeckCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiDeckCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiDeckCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
