import { Injectable } from "@angular/core";
import { Store, StoreConfig } from "@datorama/akita";
import { createInitialSearchState, SearchState } from "./search.model";



@Injectable({ providedIn: "root" })
@StoreConfig({ name: "search_results" })
export class SearchStore extends Store<SearchState> {
  constructor() {
    super(createInitialSearchState());
  }

}