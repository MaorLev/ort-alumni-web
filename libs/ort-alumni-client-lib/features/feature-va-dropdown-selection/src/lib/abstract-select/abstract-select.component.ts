import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ortInput } from '@features/feature-va-input';

@Component({
  selector: 'ort-abstract-select',
  templateUrl: './abstract-select.component.html',
  styleUrls: ['./abstract-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbstractSelectComponent implements OnInit {
  @Input() group:FormGroup;
  @Input() config:ortInput;
  constructor() {}

  ngOnInit(): void {}
}
