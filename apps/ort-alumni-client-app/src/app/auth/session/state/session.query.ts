import { Injectable } from '@angular/core';
import { Query, toBoolean } from '@datorama/akita';
import { SessionState } from './session.model';
import { SessionStore } from './session.store';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, Observable } from 'rxjs';
import { PayloadInterface } from './session.types';
@Injectable({
  providedIn: 'root'
})
export class SessionQuery extends Query<SessionState> {
  isLoggedIn$ = this.select((state) => toBoolean(state.access_token));

  constructor(
    protected override store: SessionStore,
    private jwtHelper: JwtHelperService
  ) {
    super(store);
  }

  selectPayload$: Observable<PayloadInterface> = this.select((state) =>
    this.jwtHelper.decodeToken(state.access_token)
  );

  selectName$: Observable<string> = this.selectPayload$.pipe(
    map((payload) => payload.name)
  );
  selectRole$: Observable<string> = this.selectPayload$.pipe(
    map((payload) => payload.role)
  );
  selectId$: Observable<string> = this.selectPayload$.pipe(
    map((payload) => payload.userId)
  );
  getPayload(): PayloadInterface {
    return this.jwtHelper.decodeToken(this.getValue().access_token);
  }
  getRole() {
    return this.getPayload().role;
  }
  getName() {
    return this.getPayload().name;
  }
  getUserId() {
    return this.getPayload().userId;
  }

  isLoggedIn() {
    return toBoolean(this.getValue().access_token);
  }

  isExpired() {
    return toBoolean(
      this.jwtHelper.isTokenExpired(this.getValue().access_token)
    );
  }
}
