import { ModalInteface, ModalMenuTreeComponent } from "@features/feature-modal";
import { MenuRoutes, quickLinks } from "./menu-routes.data";


export const MENU_TREE_MODAL: ModalInteface = {
  component: ModalMenuTreeComponent,
  direction: 'rtl',
  width: '100vw',
  height: '100vh',
  data: {
    dataSource: MenuRoutes,
    quickLinks: quickLinks,
    accountRoute: ''
  },
  panelClass: 'menu-bgmp',
  animation: { to: 'bottom' },
  position: { rowEnd: 'right', top: '0' }
};
