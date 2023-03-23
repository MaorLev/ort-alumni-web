import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { AlumnusModel } from '../state-alumnus/alumnus-model';
import { AlumnusQuery } from '../state-alumnus/alumnus.query';

@Component({
  selector: 'app-alumnus-detail',
  templateUrl: './alumnus-detail.component.html',
  styleUrls: ['./alumnus-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlumnusDetailComponent implements OnInit {
  alumnusModel$: Observable<AlumnusModel | undefined>;
  constructor(
    public alumnusQuery: AlumnusQuery
  ) {

  }

  ngOnInit(): void {

    this.alumnusModel$ = this.alumnusQuery.selectActiveAlumnus$;
  }
}
