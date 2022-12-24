import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { Link } from './link.interface';
import { linkData } from './link.data';
import { SearchService } from '../../../pages/search-feature/state/search.service';
import {
  ModalInteface,
  searchConfig,
} from '@features/feature-modal';
import { MENU_TREE_MODAL } from './modal-menu.data';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent {
  links: Link[] = linkData;
  modalData: ModalInteface = searchConfig;
  modalMenuTreeData: ModalInteface = MENU_TREE_MODAL;

  constructor(private searchService: SearchService) {}

  onOpenDialog() {
    // this.searchService.searchInThaWeb();
  }

  onSearch(output: any) {
    console.log(output);
  }
}
