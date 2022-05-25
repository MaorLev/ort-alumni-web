import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { InOutSmooth } from '@shared/util';

@Component({
  selector: 'alumni-pre-registeration',
  templateUrl: './pre-registeration.component.html',
  styleUrls: ['./pre-registeration.component.scss'],
  animations:[InOutSmooth],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreRegisterationComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
