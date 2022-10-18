import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EmployerFormConfig } from './employer-form.config';

@Component({
  selector: 'app-employer-registeration',
  templateUrl: './employer-registeration.component.html',
  styleUrls: ['./employer-registeration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployerRegisterationComponent implements OnInit {
  constructor(public employerFormConfig:EmployerFormConfig) {}

  ngOnInit(): void {}
}
