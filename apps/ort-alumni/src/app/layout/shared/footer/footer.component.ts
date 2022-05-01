import { WAZE_ICON } from './../../../../assets/icons/waze-icon';
import { INSTEGRAM_ICON } from './../../../../assets/icons/instegram_icon';
import { YOUTUBE_ICON } from './../../../../assets/icons/youtube-icon';
import { LINKEDIN_ICON } from './../../../../assets/icons/linkedin-icon';
import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  linkedin_icon:string = LINKEDIN_ICON;
  youtube_icon:string = YOUTUBE_ICON;
  instegram_icon:string = INSTEGRAM_ICON;
  waze_icon:string = WAZE_ICON;
}
