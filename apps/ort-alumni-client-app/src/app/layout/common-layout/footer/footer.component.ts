

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalService, ModalType } from '@features/feature-modal';
import { GoogleMapsComponent } from '@features/feature-google-maps';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  constructor(private modalService:ModalService ) {}

  onGetMap() {
    const modalData: ModalType = { component : GoogleMapsComponent,
      direction: 'rtl',
      width:'400px'

    }

    this.modalService.openDialog(modalData) ;
  }
}
