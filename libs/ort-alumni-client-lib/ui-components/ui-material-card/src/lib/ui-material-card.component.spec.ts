import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiMaterialCardComponent } from './ui-material-card.component';

describe('UiMaterialCardComponent', () => {
  let component: UiMaterialCardComponent;
  let fixture: ComponentFixture<UiMaterialCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiMaterialCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiMaterialCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
