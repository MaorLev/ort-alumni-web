import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMenuTreeComponent } from './modal-menu-tree.component';

describe('ModalMenuTreeComponent', () => {
  let component: ModalMenuTreeComponent;
  let fixture: ComponentFixture<ModalMenuTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalMenuTreeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMenuTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
