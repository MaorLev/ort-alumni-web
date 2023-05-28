import { Component, ChangeDetectionStrategy } from '@angular/core';
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
export class AddAdminComponent {
  constructor(public adminFormConfig: AdminFormConfig) {}
}
