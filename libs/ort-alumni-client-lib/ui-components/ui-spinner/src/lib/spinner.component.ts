import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'ort-spinner',
  template: ` 
    <mat-progress-spinner
        class="example-margin"
        [color]="color"
        [mode]="mode"
        [value]="value"
        >
    </mat-progress-spinner>
 `,
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent implements OnInit {
  @Input() color: ThemePalette;
  @Input() mode: ProgressSpinnerMode;
  @Input() value:number;
  constructor() {
    this.color = 'primary';
    this.mode = 'indeterminate';
    this.value = 50;
  }

  ngOnInit(): void {}
}
