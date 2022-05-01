import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Injectable } from '@angular/core';
import { Link } from './link.interface';
import { map, Observable } from 'rxjs';
import { DynamicLinks } from './dynamic-links';

@Injectable({
  providedIn: 'root',
})
export class NavBarService {
  private links = new BehaviorSubject<Link[]>(DynamicLinks(true));

  public getLinks(): Observable<Link[]> {
    return this.links
      .asObservable()
      .pipe(map((link) => link.sort((a, b) => a.order - b.order)));
  }

  public IsLogin(isLogin: boolean) {
    this.links.next(DynamicLinks(isLogin));
  }
}
