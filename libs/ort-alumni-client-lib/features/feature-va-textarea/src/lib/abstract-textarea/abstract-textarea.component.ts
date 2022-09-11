import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VaInputInterface } from '@features/feature-va-input';

@Component({
  selector: 'ort-abstract-textarea',
  templateUrl: './abstract-textarea.component.html',
  styleUrls: ['./abstract-textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbstractTextareaComponent implements OnInit {
  @Input() group:FormGroup;
  @Input() config:VaInputInterface;
  constructor() {}

  ngOnInit(): void {}
}
