  import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StaticEntitiesDataService } from './entities/static-entities-backend-data/static-entities-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(private dataService: StaticEntitiesDataService) {}


  ngOnInit(): void {
    this.dataService.initData();
  }

}
