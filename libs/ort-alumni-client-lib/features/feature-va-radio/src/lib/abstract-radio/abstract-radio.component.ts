import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VaInputInterface } from '@features/feature-va-input';

@Component({
  selector: 'ort-abstract-radio',
  templateUrl: './abstract-radio.component.html',
  styleUrls: ['./abstract-radio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbstractRadioComponent implements OnInit {
  @Input() group:FormGroup;
  @Input() config:VaInputInterface;
  constructor() {}

  ngOnInit(): void {}
}
