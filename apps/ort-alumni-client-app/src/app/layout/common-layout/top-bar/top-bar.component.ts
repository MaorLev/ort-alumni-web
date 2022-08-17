import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoginLinksConfigService } from './login-links.config.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarComponent {
  constructor(public loginLinksDataService: LoginLinksConfigService) {}
}
