
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LINKEDIN_ICON, YOUTUBE_ICON, INSTEGRAM_ICON, WAZE_ICON, svgIcon  } from '@shared/ui';


@Component({
  selector: 'alumni-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  linkedin_icon:string = LINKEDIN_ICON;
  youtube_icon:string = YOUTUBE_ICON;
  instegram_icon:string = INSTEGRAM_ICON;
  waze_icon:string = WAZE_ICON;
//   style1:svgIcon = {'width': '50px', 'height':'50px', 'background-color': ''
// , 'fill': 'blue', 'stroke': 'blue'  }
}
