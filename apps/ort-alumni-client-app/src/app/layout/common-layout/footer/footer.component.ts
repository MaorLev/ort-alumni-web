import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalService, ModalInteface } from '@features/feature-modal';
import { MAP_MODAL } from '@features/feature-google-maps';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  mapmodal: ModalInteface = MAP_MODAL;
  constructor(private modalService: ModalService) {}

  onGetMap() {
    const modalData: ModalInteface = this.mapmodal;

    this.modalService.openDialog(modalData);
  }
}
