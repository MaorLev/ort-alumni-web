import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-alumnus-detail',
  templateUrl: './alumnus-detail.component.html',
  styleUrls: ['./alumnus-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlumnusDetailComponent implements OnInit {

  @Input() details: any;

  constructor() {}

  ngOnInit(): void {}
}
