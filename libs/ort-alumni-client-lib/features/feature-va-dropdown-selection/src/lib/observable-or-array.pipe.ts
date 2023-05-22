// observable-or-array.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of } from 'rxjs';

function isObservable(input: any): boolean {
  return input instanceof Observable;
}

@Pipe({ name: 'observableOrArray' })
export class ObservableOrArrayPipe implements PipeTransform {
  transform(
    input: Observable<ItemType[]> | ItemType[]
  ): Observable<ItemType[]> {
    if (isObservable(input)) {
      return input as Observable<ItemType[]>; // Add type assertion here
    } else {
      return of(input as ItemType[]); // Add type assertion here
    }
  }
}


export interface ItemType {
  id:number;
  name: string;
}