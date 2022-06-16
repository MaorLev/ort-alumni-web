import { Link } from './link.interface';
export const linkData:Link [] = [
  {
    label: 'התנתק',
    name: 'logout',
    route: '',
    order: 1,
    showIfLogin: true,
  },
  {
    label: 'התחבר',
    name: 'login',
    route: '/auth',
    order: 2,
    showIfLogin: false,
  },
  {
    label: 'החשבון שלי',
    name: 'account',
    route: '/profile',
    order: 3,
    showIfLogin: true,
  },
  {
    label: 'בית',
    name: 'home',
    route: '/home',
    order: 4
  },
  {
    label: 'אודות',
    name: 'about',
    route: '/about',
    order: 5
  },
];

