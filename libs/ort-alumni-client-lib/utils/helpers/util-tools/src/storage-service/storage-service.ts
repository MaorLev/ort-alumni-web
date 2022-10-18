import * as CryptoJS from 'crypto-js';
export class StorageService {
  readonly SESSION_KEY: string;

  constructor(key: string) {
    this.SESSION_KEY = key;
  }
  getSession() {
    const session = localStorage.getItem(this.SESSION_KEY);
    const seToReturen = session ? this.decrypt(session) : null;
    return seToReturen ? JSON.parse(seToReturen) : {};
  }

  saveSession(session: unknown) {
    localStorage.setItem(this.SESSION_KEY, this.encrypt(JSON.stringify(session)));
  }

  clearSession() {
    localStorage.removeItem(this.SESSION_KEY);
  }

  private encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, this.SESSION_KEY).toString();
  }

  private decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, this.SESSION_KEY).toString(CryptoJS.enc.Utf8);
  }
}
