import { StorageService } from "@utils/util-tools";


export type SessionState = {
  access_token: string,
  type: string,
  expired: number
}

export function createInitialSessionState(): SessionState {
  const storage:StorageService = new StorageService('authSession');
  return {
    access_token: null,
    type: null,
    expired: null,
    ...storage.getSession() ,
  }
}
