import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PAlumnusComponent } from './p-alumnus.component';

describe('PAlumnusComponent', () => {
  let component: PAlumnusComponent;
  let fixture: ComponentFixture<PAlumnusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PAlumnusComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PAlumnusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
