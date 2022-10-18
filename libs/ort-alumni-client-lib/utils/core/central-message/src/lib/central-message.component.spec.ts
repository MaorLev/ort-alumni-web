import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralMessageComponent } from './central-message.component';

describe('CentralMessageComponent', () => {
  let component: CentralMessageComponent;
  let fixture: ComponentFixture<CentralMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CentralMessageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
