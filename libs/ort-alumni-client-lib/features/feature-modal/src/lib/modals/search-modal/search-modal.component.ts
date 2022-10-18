import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  template: `
    <div class="container">
      <div class="wrapper">
        <div class="input" mat-dialog-content>
          <mat-form-field appearance="fill">
            <mat-label>חפש באתר שלנו</mat-label>
            <input matInput #val />
          </mat-form-field>
        </div>
        <div class="btn-wrapper" mat-dialog-actions>
          <ort-button
            class="btn"
            className="custom sz-1"
            iconName="search"
            [mat-dialog-close]="val.value"
          ></ort-button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
    ::ng-deep {
      .bgmp{
        width: 100%;
        height: 100%;

      }
    }
    .container {
      background-color: var(--accent-lighter-color);

    }
      .wrapper {
        width: inherit;
        height: inherit;
        display: flex;
        gap: 0.5rem;
        /* gap: 5px; */
      }
      .btn-wrapper {
        display: block;
        /* height: 12px; */
        height: 1.2rem;
        overflow: hidden;
      }
      .btn {
        display: inline-block;
        padding: 0.8rem 1.2rem;
        /* padding: 8px 12px; */
        background: var(--primary-color);
        color: white;
        border-radius: 50%;
        margin: 0.5rem 0.2rem;
        /* margin: 5px 2px; */
        cursor: pointer;
      }
      .btn:hover {
        transform: scale(0.9);
      }
      .input {
        width: 100%;
        text-align: start;
      }
      mat-form-field {
        width: inherit;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchModalComponent {}
