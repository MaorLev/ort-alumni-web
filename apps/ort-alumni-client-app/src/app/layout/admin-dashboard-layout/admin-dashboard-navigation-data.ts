import { RouteNavigationType } from "@features/feature-navigation";




export const AdminDashboardNavigationData: RouteNavigationType[] = [
  {
    label: 'מסך ראשי',
    name: '',
    route: '/admin-dashboard-layout/admin-dashboard'
  },
  {
    label: 'ניהול משתמשים',
    name: '',
    children: [
      {
        label: 'ניהול סטודנטים',
        name: '',
        route: '/admin-dashboard-layout/students-management',
        skipLC: false
      },
      {
        label: 'ניהול בוגרים',
        name: '',
        route: '/admin-dashboard-layout/alumni-management',
        skipLC: false
      },
      {
        label: 'ניהול מורים',
        name: '',
        route: '/admin-dashboard-layout/teachers-management',
        skipLC: false
      },
    ]
  },
  {
    label: 'ניהול מאמרים',
    name: '',
    route: '/admin-dashboard-layout/articles-management'
  }
];
