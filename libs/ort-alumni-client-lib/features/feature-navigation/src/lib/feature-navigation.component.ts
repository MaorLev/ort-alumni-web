import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { RouteNavigationType } from './route-navigation.type';

@Component({
  selector: 'ort-feature-navigation',
  templateUrl: './feature-navigation.component.html',
  styleUrls: ['./feature-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureNavigationComponent implements AfterViewInit, OnInit {
  @Input() routes: RouteNavigationType [];
  @Input() alignment: 'vertical' | 'horizontal';
  @Input() routingMethod: 'routing' | 'output';
  @Input() title: string | undefined;
  @Output() submitted: EventEmitter<string> = new EventEmitter<string>();
  currentActivating: BehaviorSubject<string>;

  hide:boolean;

  constructor(private router: Router) {
    this.alignment = 'vertical';
    this.routingMethod = 'routing';
    this.hide = false;
  }
  ngOnInit(): void {
    this.currentActivating = new BehaviorSubject<string>(this.routes[0].name);
  }
  ngAfterViewInit(): void {
    if (this.routes && this.getRoutingMethod('routing') && this.routes[0].route)
      this.router.navigateByUrl(this.routes[0].route, {
        skipLocationChange: true,
      });
  }

  getRoutingMethod(method: 'routing' | 'output') {
    return this.routingMethod === method;
  }

  setActivating(path: string) {
    this.currentActivating.next(path);
  }

  emitWhenActive(path: string) {
    this.currentActivating.getValue() === path
      ? null
      : this.submitted.emit(path);
  }

  whenRouteChanging(path: string) {
    this.emitWhenActive(path);
    this.setActivating(path);
  }
}
