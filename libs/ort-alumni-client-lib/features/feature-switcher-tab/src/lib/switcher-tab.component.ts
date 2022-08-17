import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { TabInterface } from './tab.interface';
import { inOutZoom } from '@assets';
@Component({
  selector: 'ort-switcher-tab',
  templateUrl: './switcher-tab.component.html',
  styleUrls: ['./switcher-tab.component.scss'],
  animations: inOutZoom,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitcherTabComponent {
  @Input() dataTab: TabInterface [];
}
