import { Component, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'ort-search-input-dialog',
  template: `
    <div mat-dialog-content>
      <mat-form-field appearance="fill">
        <mat-label>חפש באתר שלנו</mat-label>
        <input matInput #val />
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button [mat-dialog-close]="val.value" cdkFocusInitial>
        <mat-icon aria-hidden="false" aria-label="search icon">search</mat-icon>
      </button>
    </div>
  `,
  styleUrls: ['./search-input-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputDialogComponent {
}
