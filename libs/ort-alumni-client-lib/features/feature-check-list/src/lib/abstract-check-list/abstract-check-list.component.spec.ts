import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractCheckListComponent } from './abstract-check-list.component';

describe('AbstractCheckListComponent', () => {
  let component: AbstractCheckListComponent;
  let fixture: ComponentFixture<AbstractCheckListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbstractCheckListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractCheckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
