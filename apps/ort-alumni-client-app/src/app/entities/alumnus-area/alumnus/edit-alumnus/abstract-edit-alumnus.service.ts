import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProfileSubmittedType } from '@features/feature-profile';
import { AlertsService } from '@utils/util/core/central-message';
import { Observable, Subject, takeUntil } from 'rxjs';
import { AlumnusModel } from '../configs-alumnus/alumnus-model';
import { AlumnusQuery } from '../state-alumnus/alumnus.query';
import { AlumnusService } from '../state-alumnus/alumnus.service';

@Injectable()
export abstract class AbstractEditAlumnusService {
  abstract alumnusId: string;
  abstract onDestroy$: Subject<void>;

  abstract alumnus$: Observable<AlumnusModel | undefined>;
  private currentDataAlumnus: AlumnusModel | undefined;

  constructor(
    private alerts: AlertsService,
    public alumnusQuery: AlumnusQuery,
    public service: AlumnusService
  ) {}

  onSubmit({ group: formGroup }: ProfileSubmittedType) {
    this.currentDataAlumnus = this.alumnusQuery.getActiveAlumnus();
    if (this.currentDataAlumnus && formGroup.valid)
      this.onUpdateAlumnus(formGroup);
  }
  private onUpdateAlumnus(group: FormGroup) {
    this.currentDataAlumnus = {
      ...this.currentDataAlumnus,
      ...group.value,
    };
    this.service
      .updateAlumnus(
        this.alumnusId,
        this.currentDataAlumnus as AlumnusModel
      )
      .pipe(takeUntil(this.onDestroy$))
      .subscribe();
  }

  onDeleteAlumnus() {
    debugger;
    this.service
      .deleteAlumnus(this.alumnusId )
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => {
        this.alerts.dynamicAlert('פרופיל בוגר הוסר בהצלחה');
      });
  }
}
