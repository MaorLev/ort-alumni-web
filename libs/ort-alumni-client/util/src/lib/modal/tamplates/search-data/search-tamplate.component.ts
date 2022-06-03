import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'alumni-search-tamplate',
  templateUrl: './search-tamplate.component.html',
  styleUrls: ['./search-tamplate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchTamplateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
