import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icons } from '@ui-components/ui-icon';
import { LoginLinksDataService } from './login-links.data.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarComponent {


  ort_icon = Icons.Ort;

  constructor(public loginLinksDataService:LoginLinksDataService) {

  }
}
