import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitcherTabComponent } from './switcher-tab.component';

describe('SwitcherTabComponent', () => {
  let component: SwitcherTabComponent;
  let fixture: ComponentFixture<SwitcherTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwitcherTabComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitcherTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
