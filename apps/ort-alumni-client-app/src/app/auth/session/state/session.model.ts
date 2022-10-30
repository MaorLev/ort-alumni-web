import { StorageService } from '@utils/util-tools';
import { JWTResult } from './session.types';

export type SessionState = {
  access_token: string;
  type: string;
  expired: number;
};

export function createInitialSessionState(): SessionState {
  const storage: StorageService = new StorageService('authSession');

  const session = storage.getSession()
    ? { ...storage.getSession() }
    : {} as JWTResult;
  return {
    access_token: null,
    type: null,
    expired: null,
    ...session
  };
}
