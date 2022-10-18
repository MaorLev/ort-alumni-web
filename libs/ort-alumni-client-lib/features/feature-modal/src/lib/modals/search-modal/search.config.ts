import { SearchModalComponent } from './search-modal.component';
import { ModalInteface } from '../../modal.interface';

export const searchConfig: ModalInteface = {
  component: SearchModalComponent,
  direction: 'rtl',
  width: '100%',
  height: '141px',
  animation: { to: 'aside' },
  position: { rowEnd: 'right', top: '158px' },
};
