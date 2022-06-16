import * as storage from "../storage";

export type SessionState = {
  access_token: string,
  type: string,
  expired: number
}

export function createInitialSessionState(): SessionState {
  return {
    access_token: null,
    type: null,
    expired: null,
    ...storage.getSession(),
  }
}
