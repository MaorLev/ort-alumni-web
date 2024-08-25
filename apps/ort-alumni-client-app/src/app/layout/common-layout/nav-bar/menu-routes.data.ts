import { FilesTreeNodeInterface } from '@features/feature-expansion-tree';
import { ModalBottomLinks } from '@features/feature-modal';

export const quickLinks: ModalBottomLinks[] = [
  { label: 'Facebook', routeTo: '/main' },
  { label: 'Instegram', routeTo: '/main' },
  { label: 'Linkedin', routeTo: '/main' },
  { label: 'מכללות אורט', routeTo: '/main' },
];

export const MenuRoutes: FilesTreeNodeInterface[] = [
  { name: 'עמוד הבית', route: '/main', level: 1, children: [] },
  {
    name: 'מאמרים',
    level: 1,
    children: [
      {
        name: 'חיפוש מאמר',
        description:
          'חפש מאמרים ע"פ תוכן, בין הקטגוריות השונות באתר.',
        route: '/main/articles',
        children: [],
        level: 2,
      },
      {
        name: 'קטגוריות',
        level: 2,
        description:
          'הצגת המאמרים ע"פ קטגוריה',
        children: [
          {
            name: 'חדשות',
            description:
              'הצגת כל המאמרים תחת קטגוריית חדשות',
            route: '/main/articles/articles-by-category/חדשות',
            level: 3,
            children: [],
          },
          {
            name: 'אירועים',
            route: '/main/articles/articles-by-category/אירועים',
            level: 3,
            description:
              'התחבר לאירועים שלנו',
            children: [],
          },

          {
            name: 'חינוך',
            route: '/main/articles/articles-by-category/חינוך',
            level: 3,
            description:
              'מאמרים או טיפים להעשרה ממיטב המרצים שלנו',
            children: [],
          }
        ],
      },
    ],
  },
  {
    name: 'פורטל למידה',

    level: 1,
    children: [
      {
        name: 'חיפוש מורה',
        description: `מצא מנטור או מורה שיוכל לסייע לך עם מקצוע ההנדסאי הייעודי שלך`,
        route: '/layout-teaching-portal#article-education',
        children: [],
        level: 2,
      },
      {
        name: 'מאמרים וטיפים',
        description:
        'מאמרים או טיפים להעשרה ממיטב המרצים שלנו',
        route: '/layout-teaching-portal#article-education',
        children: [],
        level: 2,
      },
      {
        name: 'מורים חדשים',
        description:
        'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק.',
        route: '/layout-teaching-portal#article-education',
        children: [],
        level: 2,
      },
    ],
  },
  { name: 'אודותינו', level: 1, children: [], route: '/main/about' },
];
