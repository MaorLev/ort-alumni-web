import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LoginLinksConfigService } from './login-links.config.service';
import { SessionQuery } from '../../../auth/session/state/session.query';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarComponent {
  @Input() noLinkLogin: boolean;
  constructor(
    public loginLinksDataService: LoginLinksConfigService,
    public sessionQuary: SessionQuery
  ) {
    this.noLinkLogin = false;
  }
}
