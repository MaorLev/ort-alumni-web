import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAlumnusComponent } from './edit-alumnus.component';

describe('EditAlumnusComponent', () => {
  let component: EditAlumnusComponent;
  let fixture: ComponentFixture<EditAlumnusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditAlumnusComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAlumnusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
