import { Injectable } from '@angular/core';
import { AlertsService } from '@utils/util/core/central-message';
import { catchError, EMPTY, map, Observable, tap } from 'rxjs';
import { AlumnusModel } from './alumnus-model';
import { AlumnusDataService } from './alumnus.data.service';
import { AlumnusStore } from './alumnus.store';


@Injectable()
export class AlumnusService {

  constructor(
    private alumnusDataService: AlumnusDataService,
    private store: AlumnusStore,
    private alerts: AlertsService
  ) {}

  loadAlumnus(alumnusId: string) {
    return this.alumnusDataService.getAlumnus(alumnusId).pipe(
      map((alumnus:AlumnusModel) => {
        this.store.update({ alumnus: alumnus, isAlumnusLoaded: true });
        return alumnus;
      }),
      catchError(()=>{
        this.store.update({ isAlumnusLoaded: false });
        return EMPTY;
      }),
    );
  }
  createAlumnus(alumnus: AlumnusModel): Observable<any> {
    return this.alumnusDataService.createAlumnus(alumnus).pipe(
      tap(() => {
        this.store.update({ alumnus: alumnus, isAlumnusLoaded: true });
      })
    );
  }
  updateAlumnus(alumnusId: string, alumnus: AlumnusModel): Observable<any> {
    return this.alumnusDataService.updateAlumnus(alumnusId, alumnus).pipe(
      tap(() => {
        this.store.update({ alumnus: { ...alumnus }, isAlumnusLoaded: true });
        this.alerts.dynamicAlert('עודכן בהצלחה');
      })
    );
  }

  deleteAlumnus(alumnusId: string): Observable<any> {
    return this.alumnusDataService.deleteAlumnus(alumnusId).pipe(
      tap(() => {
        this.store.update({ alumnus: null, isAlumnusLoaded: false });
      })
    );
  }
}
