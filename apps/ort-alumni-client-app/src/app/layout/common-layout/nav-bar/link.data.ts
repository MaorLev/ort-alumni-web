import { Link } from './link.interface';
export const linkData:Link [] = [
  {
    label: 'בית',
    name: 'home',
    route: '/',
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
  {
    label: 'פורטל מורים פרטים',
    name: 'teaching-portal',
    route: '/layout-teaching-portal',
    order: 4
  },
];