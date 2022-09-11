import { Router } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class ModalMenuRoutesService {
  ROUTES_MENU: Map<number, FilesNodeInterface[]>;
  currLevel: number;
  constructor(private router:Router) {
    this.currLevel = 1;
    this.ROUTES_MENU = new Map<number, FilesNodeInterface[]>([
      [
        1,
        [
          {
            name: 'ראשי',
            children: [
              { name: 'בית', route: '/main', onClick: (val:string) => this.routeTo(val) },
              { name: 'אודות', route: '/main/about' },
            ],
            onClick: (val:FilesNodeInterface[] ) => this.open(val)
          },
          {
            name: 'מאמרים',
            onClick: (val:FilesNodeInterface[] ) => this.open(val),
            children: [
              { name: 'מאמרים ראשי', route: '/main/articles', level: 2 },
              {
                name: 'קטגוריות',
                children: [
                  { name: 'כללי', route: '/main/article-by-category/general' },
                  {
                    name: 'אירועים',
                    route: '/main/article-by-category/events',
                  },
                ],
              },
            ],
          },
        ],
      ],
    ]);
  }


  open(children: FilesNodeInterface[]){
    this.ROUTES_MENU.set(this.currLevel, children);
    this.currLevel++;
  }
  routeTo(route: string){
    this.router.navigateByUrl(route);
  }


}
