import { Injectable } from "@angular/core";
import { Store, StoreConfig } from "@datorama/akita";
import * as storage from "../storage";
import { createInitialSessionState, SessionState } from "./session.model";


@Injectable({ providedIn: "root" })
@StoreConfig({ name: "session" })
export class SessionStore extends Store<SessionState> {
  constructor() {
    super(createInitialSessionState());
  }

  login(session: SessionState) {
    this.update(session);
    storage.saveSession(session);
  }

  logout() {
    storage.clearSession();
    this.update(createInitialSessionState());
  }
}