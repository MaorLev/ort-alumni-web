import { take } from 'rxjs';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalService, ModalInteface, MAP_MODAL } from '@features/feature-modal';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  mapConfig: ModalInteface = MAP_MODAL;
  constructor(
    // private modalService: ModalService
    ) {}

  onGetMap() {
    // const mapConfig: ModalInteface = this.mapmodal;

    // this.modalService.openDialog(modalData).pipe(take(1));
  }
  onSearch(output:any){
    console.log(output);

  }
}
