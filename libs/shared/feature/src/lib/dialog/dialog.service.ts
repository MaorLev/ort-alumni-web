import { Subscription } from 'rxjs';

import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DialogComponent } from './dialog.component';

@Injectable()
export class DialogService{
  private _value = new Observable<string>()
  onDestroy = new Subscription();
  constructor(private dialog: MatDialog) { }


  openDialog(width:string, direction: 'rtl' | 'ltr') : Observable<string> {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: width,
      direction: direction,
    });
    this._value = dialogRef.afterClosed();
    return this._value;
  }
}
