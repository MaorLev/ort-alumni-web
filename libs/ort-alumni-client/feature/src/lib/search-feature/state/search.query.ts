import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { SearchState } from './search.model';
import { SearchStore } from './search.store';
@Injectable({
	providedIn: 'root'
})
export class SearchQuery extends Query<SearchState> {


	constructor(protected override store: SearchStore) {
		super(store);
	}
}
