import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { ALLOWED_PERMISSIONS } from './allowed-permissions';

@Directive({
  selector: '[appPermission]'
})
export class PermissionDirective {
  @Input() set appPermission(permission: string) {
    this.updateView(permission);
  }

  constructor(
    private templateRef: TemplateRef<unknown>,
    private viewContainerRef: ViewContainerRef
  ) {}

  updateView(permission: string) {
    if (ALLOWED_PERMISSIONS.includes(permission)) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
}
