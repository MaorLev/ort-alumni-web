import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaTextareaComponent } from './va-textarea.component';

describe('VaTextareaComponent', () => {
  let component: VaTextareaComponent;
  let fixture: ComponentFixture<VaTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VaTextareaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
