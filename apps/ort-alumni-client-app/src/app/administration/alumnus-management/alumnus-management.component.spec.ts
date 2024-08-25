import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnusManagementComponent } from './alumnus-management.component';

describe('AlumnusManagementComponent', () => {
  let component: AlumnusManagementComponent;
  let fixture: ComponentFixture<AlumnusManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnusManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnusManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
