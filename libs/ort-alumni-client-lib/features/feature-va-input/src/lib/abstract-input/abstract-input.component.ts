import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ortInput } from '../va-input.interface';

@Component({
  selector: 'ort-abstract-input',
  templateUrl: './abstract-input.component.html',
  styleUrls: ['./abstract-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbstractInputComponent implements OnInit {

  @Input() group:FormGroup;
  @Input() config:ortInput;
  constructor() {}

  ngOnInit(): void {}
}
