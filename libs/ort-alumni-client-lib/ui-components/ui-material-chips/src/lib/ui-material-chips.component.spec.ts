import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiMaterialChipsComponent } from './ui-material-chips.component';

describe('UiMaterialChipsComponent', () => {
  let component: UiMaterialChipsComponent;
  let fixture: ComponentFixture<UiMaterialChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiMaterialChipsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiMaterialChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
