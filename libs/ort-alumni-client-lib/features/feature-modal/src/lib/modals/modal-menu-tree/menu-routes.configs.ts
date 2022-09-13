import { FilesNodeInterface } from '@features/feature-expansion-panel-node';
import { MenuQuickLink } from './modal-menu.interfaces';

export const quickLinks: MenuQuickLink[] = [
  { label: 'מכללות אורט', routeTo: '/main' },
  { label: 'אורט', routeTo: '/main' },
  { label: 'מכללות', routeTo: '/main' },
  { label: 'מכללות אורט', routeTo: '/main' }
];

export const MenuRoutes: FilesNodeInterface[] = [
  {
    name: 'ראשי',
    level: 1,
    children: [
      { name: 'בית', route: '/main', level: 2, children: [] },
      { name: 'אודות', route: '/main/about', level: 2, children: [] }
    ]
  },
  {
    name: 'השני',
    level: 1,
    children: [
      {
        name: 'מאמרים ראשי',
        description:
          'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק. לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק. לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק.',
        route: '/main/articles',
        children: [],
        level: 2
      },
      {
        name: 'קטגוריות',
        level: 2,
        description:
          'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק.',
        children: [
          {
            name: 'כללי',
            description:
              'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק. לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק. לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק.',
            route: '/main/articles-by-category/General',
            level: 3,
            children: []
          },
          {
            name: 'אירועים',
            route: '/main/articles-by-category/Events',
            level: 3,
            description:
              'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק.',
            children: []
          },
          {
            name: 'אירועים',
            route: '/main/articles-by-category/Events',
            level: 3,
            description:
              'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק.',
            children: []
          }
        ]
      }
    ]
  },
  {
    name: 'מאמרים',

    level: 1,
    children: [
      {
        name: 'מאמרים ראשי',
        description:
          'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק. לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק. לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק.',
        route: '/main/articles',
        children: [],
        level: 2
      },
      {
        name: 'קטגוריות',
        level: 2,
        description:
          'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק.',
        children: [
          {
            name: 'כללי',
            description:
              'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק. לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק. לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק.',
            route: '/main/articles-by-category/General',
            level: 3,
            children: []
          },
          {
            name: 'אירועים',
            route: '/main/articles-by-category/Events',
            level: 3,
            description:
              'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק.',
            children: []
          }
        ]
      }
    ]
  },
  {
    name: 'השלישי',

    level: 1,
    children: [
      {
        name: 'מאמרים ראשי',
        description:
          'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק. לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק. לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק.',
        route: '/main/articles',
        children: [],
        level: 2
      },
      {
        name: 'קטגוריות',
        level: 2,
        description:
          'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק.',
        children: [
          {
            name: 'כללי',
            description:
              'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק. לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק. לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק.',
            route: '/main/articles-by-category/General',
            level: 3,
            children: []
          },
          {
            name: 'אירועים',
            route: '/main/articles-by-category/Events',
            level: 3,
            description:
              'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק.',
            children: []
          }
        ]
      }
    ]
  },
  {
    name: 'מאמרים',

    level: 1,
    children: [
      {
        name: 'מאמרים ראשי',
        description:
          'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק. לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק. לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק.',
        route: '/main/articles',
        children: [],
        level: 2
      },
      {
        name: 'קטגוריות',
        level: 2,
        description:
          'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק.',
        children: [
          {
            name: 'כללי',
            description:
              'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק. לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק. לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק.',
            route: '/main/articles-by-category/General',
            level: 3,
            children: []
          },
          {
            name: 'אירועים',
            route: '/main/articles-by-category/Events',
            level: 3,
            description:
              'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק.',
            children: []
          }
        ]
      }
    ]
  }
];
