import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalInteface, MAP_MODAL } from '@features/feature-modal';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  mapConfig: ModalInteface = MAP_MODAL;
}
