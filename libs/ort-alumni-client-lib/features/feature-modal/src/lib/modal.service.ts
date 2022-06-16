import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ModalType } from './modal.type';

@Injectable({providedIn:'root'})
export class ModalService{
  private _value = new Observable<string>()
  constructor(private dialog: MatDialog) { }


  openDialog(modal_type:ModalType) : Observable<string> {
    const dialogRef = this.dialog.open(modal_type.component, {
      width: modal_type.width,
      direction: modal_type.direction,
    });
    this._value = dialogRef.afterClosed();
    return this._value;
  }
}
