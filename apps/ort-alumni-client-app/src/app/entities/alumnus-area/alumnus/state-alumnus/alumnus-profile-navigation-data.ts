import { Link } from "apps/ort-alumni-client-app/src/app/layout/common-layout/nav-bar/link.interface";


export const AlumnusProfileNavigationData: Link[] = [
  {
    label: 'עריכת פרטים אישיים',
    name: '',
    route: '/profile/alumnus-edit'
  },
  {
    label: 'עריכת פרטי מורה',
    name: '',
    route: '/profile/teacher-edit'
  }
];
