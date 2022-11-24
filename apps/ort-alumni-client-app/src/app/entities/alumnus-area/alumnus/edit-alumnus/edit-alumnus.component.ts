import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormInterface } from '@features/feature-form';
import { AlertsService } from '@utils/util/core/central-message';
import { SessionQuery } from 'apps/ort-alumni-client-app/src/app/auth/session/state/session.query';
import { ProfileGlobalFormState } from 'apps/ort-alumni-client-app/src/app/entities/global-state/profile-global-form-state';
import { combineLatestWith, Observable, Subject, takeUntil } from 'rxjs';

import { AlumnusModel } from '../state-alumnus/alumnus-model';
import { AlumnusDataService } from '../state-alumnus/alumnus.data.service';

export interface ForFormDataTemplate {
  form: FormInterface;
  alumnus: AlumnusModel;
}

@Component({
  selector: 'app-edit-alumnus',
  templateUrl: './edit-alumnus.component.html',
  styleUrls: ['./edit-alumnus.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditAlumnusComponent implements OnInit, OnDestroy {
  id: string;
  alumnusPatchAndConfigData: Observable<[AlumnusModel, FormInterface]>;
  onDestroy$: Subject<void>;

  constructor(
    public state: ProfileGlobalFormState,
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
