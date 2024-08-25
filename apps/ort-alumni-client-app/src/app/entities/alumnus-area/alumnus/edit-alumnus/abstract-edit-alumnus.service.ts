import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProfileSubmittedType } from '@features/feature-profile';
import { AlertsService } from '@utils/util/core/central-message';
import { Observable, Subject, takeUntil } from 'rxjs';
import { AlumnusModel } from '../configs-alumnus/alumnus-model';
import { AlumnusQuery } from '../state-alumnus/alumnus.query';
import { AlumnusService } from '../state-alumnus/alumnus.service';
import { SessionStore } from 'apps/ort-alumni-client-app/src/app/auth/session/state/session.store';
import { Router } from '@angular/router';
import { AlumnusStore } from '../state-alumnus/alumnus.store';

@Injectable()
export abstract class AbstractEditAlumnusService {
  abstract alumnusId: string;
  abstract onDestroy$: Subject<void>;

  abstract alumnus$: Observable<AlumnusModel | undefined>;
  private currentDataAlumnus: AlumnusModel | undefined;

  constructor(
    private alerts: AlertsService,
    public alumnusQuery: AlumnusQuery,
    public service: AlumnusService,
    public sessionStore: SessionStore,
    public store: AlumnusStore,
    public router: Router
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
    this.service
      .deleteAlumnus(this.alumnusId )
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => {
               this.store.setLoading(false);
        this.sessionStore.logout();
        this.router.navigate(['/']);
        this.alerts.dynamicAlert('פרופיל בוגר הוסר בהצלחה');
      });
  }
}
