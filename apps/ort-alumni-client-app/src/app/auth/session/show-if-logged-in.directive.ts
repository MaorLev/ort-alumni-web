import { Directive, NgModule, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { SessionQuery } from './state/session.query';

@Directive({ selector: '[appShowIfLoggedIn]' })
export class ShowIfLoggedInDirective implements OnInit, OnDestroy {
  subscription: Subscription;
  @Input() appShowIfLoggedIn: boolean | undefined;

  constructor(
    private templateRef: TemplateRef<unknown>,
    private viewContainer: ViewContainerRef,
    private authQuery: SessionQuery
  ) {}

  ngOnInit() {
    this.subscription = this.authQuery.isLoggedIn$.subscribe((isLoggedIn) => {
      if (this.appShowIfLoggedIn !== undefined)
      {
          this.viewContainer.clear();
          if (isLoggedIn) {
            if (this.appShowIfLoggedIn) {
              this.viewContainer.createEmbeddedView(this.templateRef);
            } else {
              this.viewContainer.clear();
            }
          } else {
            if (this.appShowIfLoggedIn) {
              this.viewContainer.clear();
            } else {
              this.viewContainer.createEmbeddedView(this.templateRef);
            }
          }
        }
        else {
          this.viewContainer.createEmbeddedView(this.templateRef);
        }

      });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [ShowIfLoggedInDirective],
  exports: [ShowIfLoggedInDirective]
})
export class ShowIfLoggedInDirectiveModule {}
