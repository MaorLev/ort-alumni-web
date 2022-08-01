import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
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

  dynamicAlert(msg:string) {
    this._snackBar.open(msg, '', {
      duration: 3000,
    });

  }
}
