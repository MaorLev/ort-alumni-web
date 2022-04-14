import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Injectable } from '@angular/core';
import { Links } from './links.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {
  private Links(isLogin: boolean): Links[] {
    return [
      {
        label: 'אודות',
        route: '/about',
        order: 1,
        position: 'center',
        isshow: true
      },
      {
        label: 'בית',
        route: '/home',
        position: 'center',
        order: 2,
        isshow: true
      },
      {
        label: 'החשבון שלי',
        route: '/profile',
        order: 3,
        position: 'right',
        isshow: isLogin
      },
      {
        label: 'התחבר',
        route: '/login',
        order: 4,
        position: 'right',
        isshow: !isLogin
      },
      {
        label: 'התנתק',
        route: '',
        order: 5,
        position: 'right',
        isshow: isLogin
      }
    ];
  }
  links = new BehaviorSubject<Links[]>(this.Links(false));

  constructor() {}

  public getLinks(): Observable<Links[]> {
    return this.links.asObservable();
  }
  public IsLogin(isLogin: boolean) {
    this.links.next(this.Links(isLogin));
  }
}
