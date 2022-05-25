
import {
  Component,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { inOutZoom } from '@shared/util';
import { Tab } from './tab.interface';

@Component({
  selector: 'ort-switcher-tab',
  templateUrl: './switcher-tab.component.html',
  styleUrls: ['./switcher-tab.component.scss'],
  animations: inOutZoom,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitcherTabComponent {
  @Input() dataTab: Tab [];

}
