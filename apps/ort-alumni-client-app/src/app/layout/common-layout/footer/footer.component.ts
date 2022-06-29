

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icons } from '@ui-components/ui-icon';
import { ModalService, ModalType } from '@features/feature-modal';
import { GoogleMapsComponent } from '@features/feature-google-maps';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  linkedin_icon: string = Icons.Linkedin;
  youtube_icon: string = Icons.Youtube;
  instegram_icon: string = Icons.Instegram;
  waze_icon: string = Icons.Waze;
  constructor(private modalService:ModalService ) {}

  onGetMap() {
    const modalData: ModalType = { component : GoogleMapsComponent,
      direction: 'rtl',
      width:'400px'

    }

    this.modalService.openDialog(modalData) ;
  }
}
