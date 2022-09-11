import { MenuRoutes, quickLinks } from './menu-routes.configs';
import { ModalMenuTreeComponent } from './modal-menu-tree.component';
import { ModalInteface } from '../../modal.interface';

export const MENU_TREE_MODAL: ModalInteface = {
  component: ModalMenuTreeComponent,
  direction: 'rtl',
  width: '100vw',
  height: '100vh',
  data: {
    dataSource: MenuRoutes,
    quickLinks: quickLinks
  },
  panelClass: 'menu-bgmp',
  animation: { to: 'aside' },
  position: { rowEnd: 'right', top: '0' }
};
