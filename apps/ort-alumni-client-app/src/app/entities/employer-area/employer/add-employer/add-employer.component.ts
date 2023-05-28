import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AddEmployerFormConfig } from './add-employer-form.config';

@Component({
  selector: 'app-add-employer',
  templateUrl: './add-employer.component.html',
  styleUrls: ['./add-employer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEmployerComponent {
  constructor(public employerFormConfig:AddEmployerFormConfig) {}
}
