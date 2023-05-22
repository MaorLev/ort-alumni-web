import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'ort-ui-material-chips',
  templateUrl: './ui-material-chips.component.html',
  styleUrls: ['./ui-material-chips.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiMaterialChipsComponent implements OnInit {

  @Input() text: string;
  @Input() color: 'primary' | 'accent' | 'warn';
  
  constructor() {}

  ngOnInit(): void {}
}
