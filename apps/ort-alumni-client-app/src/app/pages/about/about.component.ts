import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilesNodeInterface } from '@features/feature-expansion-panel-node';

export const ROUTES_MENU: FilesNodeInterface[] = [
  {
    name: 'ראשי',
    level: 1,
    children: [
      { name: 'בית', route: '/main', level: 2, children: [] },
      { name: 'אודות', route: '/main/about', level: 2, children: [] },
    ],
  },
  {
    name: 'מאמרים',
    level: 1,
    children: [
      { name: 'מאמרים ראשי', route: '/main/articles', children: [], level: 2 },
      {
        name: 'קטגוריות',
        level: 2,
        children: [
          {
            name: 'כללי',
            route: '/main/article-by-category/general',
            level: 3,
            children: [],
          },
          {
            name: 'אירועים',
            route: '/main/article-by-category/events',
            level: 3,
            children: [],
          },
        ],
      },
    ],
  },
];

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit {
  gridList: Array<FilesNodeInterface[]>;

  constructor(private router: Router) {
    this.gridList = new Array<FilesNodeInterface[]>();
  }

  hasChildren = (subList: FilesNodeInterface) => {
    return !!subList.children && subList.children.length > 0;
  };

  ngOnInit(): void {
    this.gridList.push(ROUTES_MENU);
  }

  open(val: FilesNodeInterface[], newLevel: number) {
    const currLevel = this.gridList.length;
    if (newLevel < currLevel) {
      const countToRemove = Math.abs(newLevel - currLevel);
      for (let i = 0; i < countToRemove; i++) this.gridList.pop();
    }
    this.gridList.push(val);
  }
  routeTo(route: string | undefined) {
    if (route) this.router.navigateByUrl(route);
  }
}
