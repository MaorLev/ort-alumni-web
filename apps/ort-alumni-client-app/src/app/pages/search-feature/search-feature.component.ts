/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SearchQuery } from './state/search.query';

@Component({
  selector: 'app-search-feature',
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
