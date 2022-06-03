import { Component, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'ort-dialog',
  template: `
    <div mat-dialog-content>
      <mat-form-field appearance="fill">
        <mat-label>חפש באתר שלנו</mat-label>
        <input matInput #val />
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <ort-button className="mat-button" icon="search" [mat-dialog-close]="val.value" cdkFocusInitial></ort-button>
    </div>
  `,
  styleUrls: ['./dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent {
}
