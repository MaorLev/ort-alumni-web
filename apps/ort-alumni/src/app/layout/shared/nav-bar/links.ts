import { Link } from "./link.interface";

export function Links(isLogin: boolean): Link [] {
  return [
    {
      label: 'אודות',
      name: 'about',
      route: '/about',
      order: 1,
      position: 'center',
      isshow: true,
    },
    {
      label: 'בית',
      name: 'home',
      route: '/home',
      position: 'center',
      order: 2,
      isshow: true,
    },
    {
      label: 'החשבון שלי',
      name: 'account',
      route: '/profile',
      order: 3,
      position: 'right',
      isshow: isLogin,
    },
    {
      label: 'התחבר',
      name: 'login',
      route: '/login',
      order: 4,
      position: 'right',
      isshow: !isLogin,
    },
    {
      label: 'התנתק',
      name: 'logout',
      route: '',
      order: 5,
      position: 'right',
      isshow: isLogin,
    },
  ];
}