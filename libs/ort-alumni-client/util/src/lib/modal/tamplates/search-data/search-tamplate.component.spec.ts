import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTamplateComponent } from './search-tamplate.component';

describe('SearchTamplateComponent', () => {
  let component: SearchTamplateComponent;
  let fixture: ComponentFixture<SearchTamplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchTamplateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTamplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
