import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VaFormInputInterface } from '@utils/core/global-interfaces';

@Component({
  selector: 'ort-abstract-select-auto-complete',
  templateUrl: './abstract-select-auto-complete.component.html',
  styleUrls: ['./abstract-select-auto-complete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbstractSelectAutoCompleteComponent implements OnInit {
  @Input() group:FormGroup;
  @Input() config:VaFormInputInterface;
  constructor() {}

  ngOnInit(): void {}
}
