import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AdminFormConfig } from './add-admin-form.config';

@Component({
  selector: 'app-add-admin',
  template: `
    <ort-expansion-panel [stepsForm]="adminFormConfig.adminForm">
    </ort-expansion-panel>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddAdminComponent implements OnInit {
  constructor(public adminFormConfig: AdminFormConfig) {}

  ngOnInit(): void {}
}
