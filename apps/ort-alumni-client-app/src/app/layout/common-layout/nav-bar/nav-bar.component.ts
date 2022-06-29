import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Link } from './link.interface';
import { linkData } from './link.data';
import { Observable } from 'rxjs';
import { SearchService } from '../../../pages/search-feature/state/search.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent {

  links: Link[] = linkData;

  value: Observable<string>;

  constructor(
    private searchService:SearchService
  ) {}

  onOpenDialog() {
    this.searchService.searchInThaWeb();
  }
}
