import { ModalInteface } from '../../modal.interface';
import { MapsModalComponent } from './maps-modal.component';

export const MAP_MODAL: ModalInteface = {
  component: MapsModalComponent,
  direction: 'rtl',
  width: '400px',
  data: {
    zoom: 17,
    center: { lat: 31.7841280939345, lng: 35.22269555161639 },
    min_height: '100px',
    height: '400px',
    width: '100%',
  },
  animation: {
    incomingOptions: {
      keyframes: [{ transform: 'rotate(360deg)' }, { transform: 'rotate(0)' }],
      keyframeAnimationOptions: { easing: 'ease-in-out', duration: 500 },
    },
    outgoingOptions: {
      keyframes: [{ transform: 'rotate(0)' }, { transform: 'rotate(360deg)' }],
      keyframeAnimationOptions: { easing: 'ease-in-out', duration: 500 },
    },
  },
};
