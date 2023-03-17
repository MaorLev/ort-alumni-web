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
import { BehaviorSubject, combineLatestWith, Observable, Subject, takeUntil } from 'rxjs';

import { AlumnusModel } from '../state-alumnus/alumnus-model';
import { AlumnusDataService } from '../state-alumnus/alumnus.data.service';
import { AlumnusQuery } from '../state-alumnus/alumnus.query';
import { AlumnusService } from '../state-alumnus/alumnus.service';
import { EditAlumnusActionHandler } from './edit-alumnus-action-handler';
import { EditAlumnusFormData } from './edit-alumnus-form-data.service';

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
  // alumnusPatchAndConfigData: Observable<[AlumnusModel, FormInterface]>;
  onDestroy$: Subject<void>;

  alumnusModel$: Observable<AlumnusModel | null>;
  activeForm$: Observable<FormInterface>;

  currentDataAlumnus: AlumnusModel | null;

  isEditMode: boolean;
  RequestIsDone: BehaviorSubject<boolean>;
  requestIsDone: Observable<boolean>;

  set IsEditMode(isEditMode: boolean) {
    this.isEditMode = isEditMode;
    if (!isEditMode) {
      this.state.backToDefaultActive();
    }
  }
  get IsEditMode() {
    return this.isEditMode;
  }
  constructor(
    public state: ProfileGlobalFormState,
    private sessionQuery: SessionQuery,
    private alerts: AlertsService,
    public alumnusQuery: AlumnusQuery,
    private service: AlumnusService
  ) {
    this.onDestroy$ = new Subject<void>();
  }

  ngOnInit(): void {
    // this.id = this.sessionQuery.getUserId();
    // this.alumnusPatchAndConfigData = this.alumnusData
    //   .getAlumnus(this.id)
    //   .pipe(combineLatestWith(this.state.activateForm$));
    this.alumnusId = this.sessionQuery.getUserId();
    if (!this.alumnusQuery.isAlumnusLoaded())
      this.service
        .loadAlumnus(this.alumnusId)
        .pipe(takeUntil(this.onDestroy$))
        .subscribe();

    this.alumnusModel$ = this.alumnusQuery.selectAlumnus$;
    this.activeForm$ = this.state.activateForm$;
    this.RequestIsDone = new BehaviorSubject<boolean>(false);
    this.requestIsDone = this.RequestIsDone.asObservable();
  }

  onActiveChange(groupName: string) {
    this.state.changeActive(groupName);
  }

  onSubmit(group: FormGroup) {
    // if (group.valid)
    //   this.alumnusData
    //     .updateAlumnus(this.id, group.value)
    //     .pipe(takeUntil(this.onDestroy$))
    //     .subscribe(() => {
    //       this.alerts.dynamicAlert('עודכן בהצלחה');
    //     });
    this.currentDataAlumnus = this.alumnusQuery.getAlumnus();

    if (this.currentDataAlumnus && group.valid)
        this.onUpdateAlumnus(group);


  }
  onUpdateAlumnus(group: FormGroup) {
    this.currentDataAlumnus = {
      ...this.currentDataAlumnus,
      ...group.value,
    };
    this.service
      .updateAlumnus(this.alumnusId, this.currentDataAlumnus as AlumnusModel)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => {
        this.RequestIsDone.next(true);
        this.RequestIsDone.next(false);
      });
  }

  onDeleteAlumnus() {
    this.service
      .deleteAlumnus(this.alumnusId)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => {
        this.alerts.dynamicAlert('כרטיס מורה הוסר בהצלחה');
      });
  }
  ngOnDestroy(): void {
    this.state.backToDefaultActive();
    this.state.subs.unsubscribe();
    this.onDestroy$.next();
  }
}
