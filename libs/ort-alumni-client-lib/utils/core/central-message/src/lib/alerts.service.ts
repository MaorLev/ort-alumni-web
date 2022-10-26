import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TimeToShow } from './central-message.types';

@Injectable({providedIn:'root'})
export class AlertsService {
  alertLogout() {
    this._snackBar.open('ביי ביי ', 'מנותק', {
      duration: 3000,
    });
  }

  constructor(private _snackBar: MatSnackBar) {}

  alertToken() {
    this._snackBar.open('הרבה זמן ללא שימוש התחבר מחדש', 'מנותק', {
      duration: 3000,
    });
  }

  dynamicAlert(msg:string, statusMessage?:string, duration?:number) {
    this._snackBar.open(msg, statusMessage || '', {
      duration: duration || TimeToShow.interceptorAlertTime,
    });

  }
}
