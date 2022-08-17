import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { FeatureModalModule } from './feature-modal.module';
import { ModalInteface } from './modal.interface';

@Injectable({providedIn:FeatureModalModule})
export class ModalService{
  private _value = new Observable<string>()
  constructor(private dialog: MatDialog) { }


  openDialog(modal_type:ModalInteface) : Observable<string> {
    const dialogRef = this.dialog.open(modal_type.component, {
      width: modal_type.width,
      direction: modal_type.direction,
      data: modal_type.data
    });
    this._value = dialogRef.afterClosed();
    return this._value;
  }
}
