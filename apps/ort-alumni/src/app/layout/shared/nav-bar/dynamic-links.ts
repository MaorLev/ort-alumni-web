import { Link } from "./link.interface";

export function DynamicLinks(isLogin: boolean): Link [] {
  return [

    {
      label: 'החשבון שלי',
      name: 'account',
      route: '/profile',
      order: 3,
      isshow: isLogin,
    },
    {
      label: 'התחבר',
      name: 'login',
      route: '/login',
      order: 2,
      isshow: !isLogin,
    },
    {
      label: 'התנתק',
      name: 'logout',
      route: '',
      order: 1,
      isshow: isLogin,
    },
  ];
}