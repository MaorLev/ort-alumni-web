import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInputDialogComponent } from './search-input-dialog.component';

describe('SearchInputDialogComponent', () => {
  let component: SearchInputDialogComponent;
  let fixture: ComponentFixture<SearchInputDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchInputDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInputDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
