import { Injectable } from '@angular/core';
import { AlertsService } from '@utils/util/core/central-message';
import { catchError, EMPTY, map, Observable, tap } from 'rxjs';
import { AlumnusModel } from '../configs-alumnus/alumnus-model';
import { AlumnusDataService } from './alumnus.data.service';
import { AlumnusStore } from './alumnus.store';
import { Router } from '@angular/router';
import { SessionStore } from '../../../../auth/session/state/session.store';
import { IPaginationByKeyFilter, IUserTotalPgn } from 'apps/ort-alumni-client-app/src/app/administration/admin-helpers/pagination-and-filters-configs';

@Injectable()
export class AlumnusService {
  constructor(
    private alumnusDataService: AlumnusDataService,
    private store: AlumnusStore,
    private alerts: AlertsService,
    private router: Router,
    private sessionStore: SessionStore
  ) {}

  loadAlumnus(alumnusId: string) {
    return this.alumnusDataService.getAlumnus(alumnusId).pipe(
      map((alumnus: AlumnusModel) => {
        this.store.add(alumnus, { loading: true });
        this.store.setActive(alumnus.id);
        return alumnus;
      }),
      catchError(() => {
        this.store.setLoading(false);
        return EMPTY;
      })
    );
  }
  loadAlumni() {
    return this.alumnusDataService.getAlumni().pipe(
      map((alumni: AlumnusModel[]) => {
        this.store.add(alumni, { loading: true });

        return alumni;
      }),
      catchError(() => {
        this.store.setLoading(false);
        return EMPTY;
      })
    );
  }
  createAlumnus(alumnus: AlumnusModel): Observable<any> {
    return this.alumnusDataService.createAlumnus(alumnus).pipe(
      tap(() => {
        this.store.add(alumnus, { loading: true });
        this.store.setActive(alumnus.id);
      })
    );
  }
  updateAlumnus(alumnusId: string, alumnus: AlumnusModel): Observable<any> {
    return this.alumnusDataService.updateAlumnus(alumnusId, alumnus).pipe(
      tap(() => {
        this.store.updateActive({ ...alumnus });
        this.alerts.dynamicAlert('עודכן בהצלחה');
      })
    );
  }

  deleteAlumnus(alumnusId: string): Observable<any> {
    return this.alumnusDataService.deleteAlumnus(alumnusId).pipe(
      tap(() => {
        this.store.remove(alumnusId);
        this.store.setActive(null);
      })
    );
  }

  searchAlumniByKeyAndLoad(searchDetails: IPaginationByKeyFilter): Observable<IUserTotalPgn<AlumnusModel>> {
    return this.alumnusDataService.searchAlumniByKey(searchDetails).pipe(
      map((alumniPgn: IUserTotalPgn<AlumnusModel>) => {
        // console.log("Service",alumniPgn.users);
        this.store.set(alumniPgn.users);
        this.store.setLoading(true);


        return alumniPgn;
      }),
      catchError((error) => {
        this.store.setLoading(false);
        return EMPTY;
      })
    );
  }
}
