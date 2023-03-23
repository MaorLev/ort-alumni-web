import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { SessionQuery } from 'apps/ort-alumni-client-app/src/app/auth/session/state/session.query';
import { AlumnusQuery } from 'apps/ort-alumni-client-app/src/app/entities/alumnus-area/alumnus/state-alumnus/alumnus.query';
import { AlumnusService } from 'apps/ort-alumni-client-app/src/app/entities/alumnus-area/alumnus/state-alumnus/alumnus.service';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-profile-alumnus',
  templateUrl: './profile-alumnus.component.html',
  styleUrls: ['./profile-alumnus.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileAlumnusComponent implements OnInit, OnDestroy {
  alumnusId: string;

  onDestroy$: Subject<void>;

  isEditMode: boolean;
  isLoading$:Observable<boolean| undefined>;
  set IsEditMode(isEditMode: boolean) {
    this.isEditMode = isEditMode;
    // if (!isEditMode) {
    //   this.state.backToDefaultActive();
    // }
  }
  get IsEditMode() {
    return this.isEditMode;
  }
  constructor(
    private sessionQuery: SessionQuery,
    private router: Router,
    public alumnusQuery: AlumnusQuery,
    private service: AlumnusService
  ) {
    this.onDestroy$ = new Subject<void>();
  }

  ngOnInit(): void {

    this.alumnusId = this.sessionQuery.getUserId();
    this.isLoading$ = this.alumnusQuery.isAlumnusLoaded$;
    if (!this.alumnusQuery.isAlumnusLoaded())
      this.service
        .loadAlumnus(this.alumnusId)
        .pipe(takeUntil(this.onDestroy$))
        .subscribe();
  }

  screenToShow() {
    this.isEditMode = !this.isEditMode;
      this.isEditMode
        ? this.router.navigateByUrl(
          `profile/profile-alumnus/alumnus-edit`
          )
        : this.router.navigateByUrl(
            `profile/profile-alumnus/alumnus-detail`
          );
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }
}
