import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTreeNodeComponent } from './ui-tree-node.component';

describe('UiTreeNodeComponent', () => {
  let component: UiTreeNodeComponent;
  let fixture: ComponentFixture<UiTreeNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiTreeNodeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiTreeNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
