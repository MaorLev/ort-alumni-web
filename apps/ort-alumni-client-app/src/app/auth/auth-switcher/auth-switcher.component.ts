import { AUTH_SWITCHER } from './auth-switcher.data';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Tab } from '@features/feature-switcher-tab';
import { inOutZoom } from '@assets';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-auth-switcher',
  templateUrl: './auth-switcher.component.html',
  styleUrls: ['./auth-switcher.component.scss'],
  animations: inOutZoom,
})
export class AuthSwitcherComponent {
  data: Tab[] = AUTH_SWITCHER;
}
