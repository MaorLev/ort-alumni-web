import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoginLinksDataService } from './login-links.data.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarComponent {
  constructor(public loginLinksDataService: LoginLinksDataService) {}
}
