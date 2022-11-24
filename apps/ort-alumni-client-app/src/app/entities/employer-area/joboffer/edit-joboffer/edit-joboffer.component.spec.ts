import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJobofferComponent } from './edit-joboffer.component';

describe('EditJobofferComponent', () => {
  let component: EditJobofferComponent;
  let fixture: ComponentFixture<EditJobofferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditJobofferComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditJobofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
