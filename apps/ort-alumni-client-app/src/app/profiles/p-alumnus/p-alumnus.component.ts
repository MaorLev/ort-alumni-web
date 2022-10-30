import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-p-alumnus',
  templateUrl: './p-alumnus.component.html',
  styleUrls: ['./p-alumnus.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PAlumnusComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
