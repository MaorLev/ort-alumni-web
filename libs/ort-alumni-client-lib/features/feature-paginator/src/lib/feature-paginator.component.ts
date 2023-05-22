import { Component, OnInit, ChangeDetectionStrategy, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'ort-feature-paginator',
  templateUrl: './feature-paginator.component.html',
  styleUrls: ['./feature-paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturePaginatorComponent implements OnInit {


  length:number;
  pageSize:number ;
  pageEvent: PageEvent;

  @Output() pageOutput:PageEvent = new PageEvent();

  constructor() {}

  ngOnInit(): void {}
}
