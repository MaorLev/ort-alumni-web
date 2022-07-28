import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  ModalService,
  ModalType,
  searchDetail,
} from '@features/feature-modal';
import { switchMap, take } from 'rxjs';
import { searchDataService } from './search.data.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(
    private modalService: ModalService,
    private searchData: searchDataService,
    private router: Router
  ) {}
  modalData: ModalType = searchDetail;
  // result: Observable<string>;
  searchInThaWeb() {
    this.modalService
      .openDialog(this.modalData)
      .pipe(
        take(1),
        switchMap((word: string) => {
          console.log(word);
          return this.searchData.searchPages(word);
        })
      )
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .subscribe((content: unknown) => {
        console.log('content' + '' + content);
        // save in akita store
        //route to search page
      });
  }
}
