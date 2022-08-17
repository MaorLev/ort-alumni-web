import { ModalInteface } from "@features/feature-modal";
import { GoogleMapsComponent } from "./google-maps.component";

export const MAP_MODAL:ModalInteface = {
  component: GoogleMapsComponent,
  direction: 'rtl',
  width: '400px',
  data: {center:{lat: 31.7841280939345, lng: 35.22269555161639}},
}