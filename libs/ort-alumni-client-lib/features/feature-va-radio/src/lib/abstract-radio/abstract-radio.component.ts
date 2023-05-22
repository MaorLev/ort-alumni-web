import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VaFormInputInterface } from '@utils/core/global-interfaces';

@Component({
  selector: 'ort-abstract-radio',
  templateUrl: './abstract-radio.component.html',
  styleUrls: ['./abstract-radio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbstractRadioComponent implements OnInit {
  @Input() group:FormGroup;
  @Input() config:VaFormInputInterface;
  constructor() {}

  ngOnInit(): void {}
}
