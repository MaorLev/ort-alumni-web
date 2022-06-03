import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SearchQuery } from './state/search.query';

@Component({
  selector: 'alumni-search-feature',
  templateUrl: './search-feature.component.html',
  styleUrls: ['./search-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFeatureComponent implements OnInit {
  result:Observable<any>;
  constructor(searchQuery:SearchQuery) {
    //waiting to implement
    // this.result = searchQuery.select()
  }

  ngOnInit(): void {}
}
