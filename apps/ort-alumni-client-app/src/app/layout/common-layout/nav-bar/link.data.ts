import { Link } from './link.interface';
export const linkData: Link[] = [
  {
    label: 'בית',
    name: 'home',
    route: '/',
    requiredPermission: false,
    order: 1,
  },
  {
    label: 'אודות',
    name: 'about',
    route: '/main/about',
    requiredPermission: false,
    order: 2,
  },
  {
    label: 'מאמרים',
    name: 'articles',
    route: '/main/articles',
    requiredPermission: false,
    order: 3,
  },
  {
    label: 'פורטל מורים פרטים',
    name: 'teaching-portal',
    route: '/layout-teaching-portal',
    requiredPermission: false,
    order: 4,
  },
  {
    label: 'פרופיל',
    name: 'account',
    route: '/profile',
    requiredPermission: true,
    // showIfLogin: true,
    order: 5,
  },
  {
    label: 'אזור ניהול',
    name: 'admin-dashboard',
    route: '/admin-dashboard-layout/admin-dashboard',
    requiredPermission: true,
    order: 6,
  },
];
