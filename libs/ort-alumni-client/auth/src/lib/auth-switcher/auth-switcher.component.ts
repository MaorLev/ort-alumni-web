import { AUTH_SWITCHER } from './auth-switcher.data';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Tab } from '@shared/feature';

@Component({
  selector: 'alumni-auth-switcher',
  templateUrl: './auth-switcher.component.html',
  styles: [
    `
      ::ng-deep{
        .auth-main {
          background: url('https://img.freepik.com/free-vector/white-elegant-texture-background_23-2148445782.jpg') no-repeat center center/cover
        }
      }
      :host{
        .switcher{
          width:inehrit;
          height:inehrit;
          &.ort-switcher-tab{
            width:inehrit;
            height:inehrit;

          }
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthSwitcherComponent {
  data: Tab [] = AUTH_SWITCHER;
}
