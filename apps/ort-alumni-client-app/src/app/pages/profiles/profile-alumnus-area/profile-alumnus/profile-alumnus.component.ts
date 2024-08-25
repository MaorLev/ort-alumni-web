import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { SessionQuery } from '../../../../auth/session/state/session.query';
import { AlumnusQuery } from '../../../../entities/alumnus-area/alumnus/state-alumnus/alumnus.query';
import { AlumnusService } from '../../../../entities/alumnus-area/alumnus/state-alumnus/alumnus.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { AlumnusModel } from '../../../../entities/alumnus-area/alumnus/configs-alumnus/alumnus-model';
import { AbstractEditAlumnusService } from '../../../../entities/alumnus-area/alumnus/edit-alumnus/abstract-edit-alumnus.service';
import { AlertsService } from '@utils/util/core/central-message';
import { SessionStore } from 'apps/ort-alumni-client-app/src/app/auth/session/state/session.store';
import { AlumnusStore } from 'apps/ort-alumni-client-app/src/app/entities/alumnus-area/alumnus/state-alumnus/alumnus.store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-alumnus',
  templateUrl: './profile-alumnus.component.html',
  styleUrls: ['./profile-alumnus.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileAlumnusComponent
  extends AbstractEditAlumnusService
  implements OnInit, OnDestroy
{
  alumnusId: string;
  alumnus$: Observable<AlumnusModel | undefined>;
  onDestroy$: Subject<void>;

  isEditMode: boolean;

  constructor(
    private sessionQuery: SessionQuery,
    alerts: AlertsService,
    alumnusQuery: AlumnusQuery,
    service: AlumnusService,
    sessionStore: SessionStore,
    store: AlumnusStore,
    router: Router
  ) {
    super(alerts, alumnusQuery, service, sessionStore, store, router);
    this.onDestroy$ = new Subject<void>();
    this.isEditMode = false;
  }

  ngOnInit(): void {
    this.alumnusId = this.sessionQuery.getUserId();
    this.alumnus$ = this.alumnusQuery.selectActive();
    if (!this.alumnusQuery.isAlumnusLoaded())
      this.service
        .loadAlumnus(this.alumnusId)
        .pipe(takeUntil(this.onDestroy$))
        .subscribe();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }
}
