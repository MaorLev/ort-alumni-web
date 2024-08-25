import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-management-shell',
  templateUrl: './management-shell.component.html',
  styleUrls: ['./management-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManagementShellComponent {

  constructor(private location: Location) { }

  goBack() {
    this.location.back(); // Navigate back to the last route
  }
}
