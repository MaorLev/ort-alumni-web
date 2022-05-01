import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject, Observable } from 'rxjs';
import { SearchInputDialogComponent } from './search-input-dialog/search-input-dialog.component';

@Component({
  selector: 'ort-search-button',
  template: `
    <button mat-flat-button color="primary" (click)="openDialog()">
      <mat-icon aria-hidden="false" aria-label="search icon">search</mat-icon>
    </button>

    <li *ngIf="_value | async as model">
      You chose: {{model}}
    </li>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchButtonComponent {
  _value = new Observable<string>()
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(SearchInputDialogComponent, {
      width: '250px',
      direction: 'rtl',
    });

    this._value = dialogRef.afterClosed();
  }
}
