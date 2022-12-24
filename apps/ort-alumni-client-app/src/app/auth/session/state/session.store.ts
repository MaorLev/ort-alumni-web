import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

import { createInitialSessionState, SessionState } from './session.model';
import { StorageService } from '@utils/util-tools';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'session' })
export class SessionStore extends Store<SessionState> {
  private readonly session: StorageService;
  constructor() {
    super(createInitialSessionState());
    this.session = new StorageService('authSession');

  }

  login(session: SessionState) {
    this.update(session);
    this.session.saveSession(session);
  }

  logout() {
    this.session.clearSession();
    this.update(createInitialSessionState());
    
  }


}
