import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
  Input
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormInterface } from '@features/feature-form';
import { AlertsService } from '@utils/util/core/central-message';
import { combineLatestWith, Observable, Subject, takeUntil } from 'rxjs';
import { AlumnusModel } from '../../auth/registeration/alumnus-reg/state/alumnus-model';
import { AlumnusDataService } from '../../auth/registeration/alumnus-reg/state/alumnus.data.service';
import { SessionQuery } from '../../auth/session/state/session.query';
import { PGlobalFormState } from '../p-global-form-state';
export interface ForFormDataTemplate {
  form: FormInterface;
  alumnus: AlumnusModel;
}

@Component({
  selector: 'app-p-alumnus',
  templateUrl: './p-alumnus.component.html',
  styleUrls: ['./p-alumnus.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PAlumnusComponent implements OnInit, OnDestroy {
  id: string;
  alumnusPatchAndConfigData: Observable<[AlumnusModel, FormInterface]>;
  onDestroy$: Subject<void>;

  constructor(
    public state: PGlobalFormState,
    private alumnusData: AlumnusDataService,
    private sessionQuery: SessionQuery,
    private alerts: AlertsService
  ) {
    this.onDestroy$ = new Subject<void>();
  }

  ngOnInit(): void {
    this.id = this.sessionQuery.getUserId();
    this.alumnusPatchAndConfigData = this.alumnusData
      .getAlumnus(this.id)
      .pipe(combineLatestWith(this.state.activateForm$));
  }

  onActiveChange(groupName: string) {
    this.state.changeActive(groupName);
  }

  onSubmit(group: FormGroup) {
    if (group.valid)
      this.alumnusData
        .updateAlumnus(this.id, group.value)
        .pipe(takeUntil(this.onDestroy$))
        .subscribe(() => {
          this.alerts.dynamicAlert('עודכן בהצלחה');
        });
  }

  ngOnDestroy(): void {
    this.state.subs.unsubscribe();
    this.onDestroy$.next();
  }
}
