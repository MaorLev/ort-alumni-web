import { AUTH_SWITCHER } from './auth-switcher.data';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Tab } from '@features/feature-switcher-tab';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-auth-switcher',
  templateUrl: './auth-switcher.component.html',
  styleUrls: ['./auth-switcher.component.scss'],
})
export class AuthSwitcherComponent {
  data: Tab[] = AUTH_SWITCHER;
}
