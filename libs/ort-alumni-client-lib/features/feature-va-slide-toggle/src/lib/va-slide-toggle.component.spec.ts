import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaSlideToggleComponent } from './va-slide-toggle.component';

describe('VaSlideToggleComponent', () => {
  let component: VaSlideToggleComponent;
  let fixture: ComponentFixture<VaSlideToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VaSlideToggleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaSlideToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
