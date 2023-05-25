import { Injectable } from '@angular/core';
import { AlertsService } from '@utils/util/core/central-message';
import { catchError, EMPTY, map, Observable, tap } from 'rxjs';
import { AlumnusModel } from '../configs-alumnus/alumnus-model';
import { AlumnusDataService } from './alumnus.data.service';
import { AlumnusStore } from './alumnus.store';
import { Router } from '@angular/router';
import { SessionStore } from '../../../../auth/session/state/session.store';



@Injectable()
export class AlumnusService {

  constructor(
    private alumnusDataService: AlumnusDataService,
    private store: AlumnusStore,
    private alerts: AlertsService,
    private router:Router,
    private sessionStore: SessionStore,
  ) {}

  loadAlumnus(alumnusId: string) {
    return this.alumnusDataService.getAlumnus(alumnusId).pipe(
      map((alumnus:AlumnusModel) => {
        this.store.add(alumnus, { loading: true });
        this.store.setActive(alumnus.id);
        return alumnus;
      }),
      catchError(()=>{
        this.store.setLoading(false);
        return EMPTY;
      }),
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
        this.store.updateActive({...alumnus});
        this.alerts.dynamicAlert('עודכן בהצלחה');
      })
    );
  }

  deleteAlumnus(alumnusId: string): Observable<any> {
    return this.alumnusDataService.deleteAlumnus(alumnusId).pipe(
      tap(() => {
        this.store.remove(alumnusId);
        this.store.setLoading(false);
        this.store.setActive(null);
        this.sessionStore.logout();
        this.router.navigate(['/']);
      })
    );
  }
}
