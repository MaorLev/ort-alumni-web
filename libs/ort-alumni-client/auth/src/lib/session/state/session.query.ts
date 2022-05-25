import { Injectable } from '@angular/core';
import { Query, toBoolean } from '@datorama/akita';
import { SessionState } from './session.model';
import { SessionStore } from './session.store';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
	providedIn: 'root'
})
export class SessionQuery extends Query<SessionState> {
	isLoggedIn$ = this.select((state) => toBoolean(state.access_token));
	// name$ = this.select((state) => state.name);

	constructor(protected override store: SessionStore,
    private jwtHelper: JwtHelperService) {
		super(store);
	}

	isLoggedIn() {
		return toBoolean(this.getValue().access_token);
	}

  isExpired(){
    return toBoolean(this.jwtHelper.isTokenExpired(this.getValue().access_token));
  }
}
