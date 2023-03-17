import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Link } from '../nav-bar/link.interface';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent implements AfterViewInit, OnInit {
  @Input() routes: Link[];
  @Input() alignment: 'vertical' | 'horizontal';
  @Input() routingMethod: 'routing' | 'output';
  @Input() title:string | undefined;
  @Output() submitted: EventEmitter<string> = new EventEmitter<string>();
  currentActivating:BehaviorSubject<string>;

  constructor(private router: Router) {
    this.alignment = 'vertical';
    this.routingMethod = 'routing';
  }
  ngOnInit(): void {
    this.currentActivating = new BehaviorSubject<string>(this.routes[0].name);
  }
  ngAfterViewInit(): void {
    if (this.routes && this.getRoutingMethod('routing'))
      this.router.navigateByUrl(this.routes[0].route, {
        skipLocationChange: true
      });
  }

  getRoutingMethod(method: 'routing' | 'output') {
    return this.routingMethod === method;
  }

  setActivating(path:string){
    this.currentActivating.next(path);
  }

  emitWhenActive(path:string)
  {
    this.currentActivating.getValue() === path ? null : this.submitted.emit(path);
  }

  whenRouteChanging(path:string){
    this.emitWhenActive(path);
    this.setActivating(path);
  }
}
