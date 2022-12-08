import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LoginLinksConfigService } from './login-links.config.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarComponent {

  @Input() noLinkLogin:boolean;
  constructor(public loginLinksDataService: LoginLinksConfigService) {
    this.noLinkLogin = false;
  }
}
