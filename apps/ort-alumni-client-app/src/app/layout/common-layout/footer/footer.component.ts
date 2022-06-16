import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icons } from '@ui-components/ui-icon';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  linkedin_icon: string = Icons.Linkedin;
  youtube_icon: string = Icons.Youtube;
  instegram_icon: string = Icons.Instegram;
  waze_icon: string = Icons.Waze;
}
