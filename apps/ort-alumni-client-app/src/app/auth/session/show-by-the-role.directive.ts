import { Directive, NgModule, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { SessionQuery } from './state/session.query';

@Directive({ selector: '[appShowByTheRole]' })
export class ShowByTheRoleDirective implements OnInit, OnDestroy {
  subscription: Subscription;
  @Input() appShowByTheRole: { required: boolean | undefined; label: string };

  constructor(
    private templateRef: TemplateRef<unknown>,
    private viewContainer: ViewContainerRef,
    private authQuery: SessionQuery
  ) {}

  ngOnInit() {
    this.subscription = this.authQuery.selectPayload$.subscribe((payload) => {
      const pl = payload?.role;
      if (
        (pl === 'Admin' && this.appShowByTheRole.label === 'אזור ניהול') ||
        (pl === 'Student' && this.appShowByTheRole.label === 'פרופיל') ||
        (pl === 'Alumnus' && this.appShowByTheRole.label === 'פרופיל') ||
        this.appShowByTheRole.required === false
      ) {
        // this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [ShowByTheRoleDirective],
  exports: [ShowByTheRoleDirective],
})
export class ShowByTheRoleDirectiveModule {}
