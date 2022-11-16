import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { Router } from '@angular/router';
import { Link } from '../nav-bar/link.interface';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent implements AfterViewInit {
  @Input() routes: Link[];
  @Input() alignment: 'vertical' | 'horizontal';
  @Input() routingMethod: 'routing' | 'output';
  @Input() title:string | undefined;
  @Output() submitted: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router) {
    this.alignment = 'vertical';
    this.routingMethod = 'routing';
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
}
