import { Link } from './link.interface';
export const linkData:Link [] = [
  {
    label: 'בית',
    name: 'home',
    route: 'home',
    order: 1
  },
  //   {
  //   label: 'פרופיל',
  //   name: 'account',
  //   route: '/profile',
  //   order: 2,
  //   showIfLogin: true,
  // },
  // {
  //   label: 'אודות',
  //   name: 'about',
  //   route: 'about',
  //   order: 3
  // },
  {
    label: 'מאמרים',
    name: 'articles',
    route: '/main/articles',
    order: 3
  },
];


    // {
    //   label: 'החשבון שלי',
    //   name: 'account',
    //   route: '/profile',
    //   order: 1,
    //   showIfLogin: true,
    // },