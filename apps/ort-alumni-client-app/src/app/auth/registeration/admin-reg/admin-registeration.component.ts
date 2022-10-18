import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AdminFormConfig } from './admin-form.config';

@Component({
  selector: 'app-admin-registeration',
  template: `
    <ort-expansion-panel [stepsForm]="adminFormConfig.adminForm">
    </ort-expansion-panel>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminRegisterationComponent implements OnInit {
  constructor(public adminFormConfig: AdminFormConfig) {}

  ngOnInit(): void {}
}
