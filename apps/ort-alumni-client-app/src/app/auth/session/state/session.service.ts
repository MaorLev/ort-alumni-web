import { SessionState } from './session.model';
import { Injectable } from '@angular/core';
import { SessionStore } from './session.store';
import { SessionDataService } from './session.data.service';
import { tap } from 'rxjs/operators';
import { credentials } from '../../login/credentials.interface';

@Injectable({
	providedIn: 'root'
})
export class SessionService {
	constructor(private authStore: SessionStore, private authDataService: SessionDataService) { }

	login(creds: credentials) {
		return this.authDataService.login(creds).pipe(tap((session:SessionState) => this.authStore.login(session)));
	}

	logout() {
		this.authStore.logout();
	}
}
