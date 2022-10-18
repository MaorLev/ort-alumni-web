import { Component, ChangeDetectionStrategy } from '@angular/core';
import { InOutSmooth } from '@assets';
import { REGISTER_NAVIGATION_DATA } from './register-navigation-data';

@Component({
  selector: 'app-pre-registeration',
  templateUrl: './pre-registeration.component.html',
  styleUrls: ['./pre-registeration.component.scss'],
  animations: [InOutSmooth],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreRegisterationComponent {


  navigationUsers = REGISTER_NAVIGATION_DATA;
}
