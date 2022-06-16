import { Component, ChangeDetectionStrategy } from '@angular/core';
import { InOutSmooth } from '@assets';

@Component({
  selector: 'app-pre-registeration',
  templateUrl: './pre-registeration.component.html',
  styleUrls: ['./pre-registeration.component.scss'],
  animations:[InOutSmooth],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreRegisterationComponent {

}
