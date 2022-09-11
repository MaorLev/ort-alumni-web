import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureYoutubePlayerComponent } from './feature-youtube-player.component';

describe('FeatureYoutubePlayerComponent', () => {
  let component: FeatureYoutubePlayerComponent;
  let fixture: ComponentFixture<FeatureYoutubePlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureYoutubePlayerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureYoutubePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
