import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnusRegisterationComponent } from './alumnus-registeration.component';

describe('AlumnusRegisterationComponent', () => {
  let component: AlumnusRegisterationComponent;
  let fixture: ComponentFixture<AlumnusRegisterationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlumnusRegisterationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnusRegisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
