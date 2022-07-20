import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { Observable } from 'rxjs';

@Component({
  selector: 'ort-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressComponent implements OnInit {


  @Input() color: ThemePalette = 'primary';
  @Input() mode: ProgressBarMode = 'determinate';
  @Input() value: Observable<number>;
  @Input() bufferValue:number | undefined;
  constructor() {}

  ngOnInit(): void {}
}
