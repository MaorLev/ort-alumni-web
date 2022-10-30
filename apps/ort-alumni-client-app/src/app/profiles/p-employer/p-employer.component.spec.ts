import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PEmployerComponent } from './p-employer.component';

describe('PEmployerComponent', () => {
  let component: PEmployerComponent;
  let fixture: ComponentFixture<PEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PEmployerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
