import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormComponent, FormInterface } from '@features/feature-form';
import { cloneDeep } from '@utils/util-tools';
import { AlertsService } from '@utils/util/core/central-message';
import { GlobalControlsConfigState } from 'apps/ort-alumni-client-app/src/app/entities/global-state/global-controls-config-state';
import {
  Observable,
  Subject,
  takeUntil,
  tap,
} from 'rxjs';

import { AlumnusModel } from '../state-alumnus/alumnus-model';
import { AlumnusQuery } from '../state-alumnus/alumnus.query';
import { AlumnusService } from '../state-alumnus/alumnus.service';

export interface ForFormDataTemplate {
  form: FormInterface;
  alumnus: AlumnusModel;
}

@Component({
  selector: 'app-edit-alumnus',
  templateUrl: './edit-alumnus.component.html',
  styleUrls: ['./edit-alumnus.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditAlumnusComponent implements OnInit, OnDestroy {
  alumnusId: string;
  onDestroy$: Subject<void>;

  alumnusModel$: Observable<AlumnusModel | undefined>;
  activeForm$: Observable<FormInterface>;

  currentDataAlumnus: AlumnusModel | undefined;
  @ViewChild('form') formC: FormComponent;

  constructor(
    public state: GlobalControlsConfigState,
    private alerts: AlertsService,
    public alumnusQuery: AlumnusQuery,
    private service: AlumnusService
  ) {
    this.onDestroy$ = new Subject<void>();
  }

  ngOnInit(): void {
    this.alumnusModel$ = this.alumnusQuery.selectActiveAlumnus$.pipe(
      tap((alum) => {
        if (alum && !this.alumnusId) this.alumnusId = alum.id;
      })
    );
    this.activeForm$ = this.state.activateForm$;
  }

  onActiveChange(groupName: string) {
    this.state.changeActive(groupName);
  }

  onSubmit(group: FormGroup) {
    this.currentDataAlumnus = this.alumnusQuery.getActiveAlumnus();
    if (this.currentDataAlumnus && group.valid) this.onUpdateAlumnus(group);
  }
  onUpdateAlumnus(group: FormGroup) {
    this.currentDataAlumnus = {
      ...this.currentDataAlumnus,
      ...group.value,
    };
    this.service
      .updateAlumnus(this.alumnusId, this.currentDataAlumnus as AlumnusModel)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe();
  }

  onDeleteAlumnus() {
    this.service
      .deleteAlumnus(this.alumnusId)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => {
        this.alerts.dynamicAlert('פרופיל בוגר הוסר בהצלחה');
      });
  }
  ngOnDestroy(): void {
    this.state.backToDefaultActive();
    this.state.subs.unsubscribe();
    this.onDestroy$.next();
  }
}
