import { ModalInteface } from "../../modal.interface";
import { TeacherContactModalComponent } from "./teacher-contact-modal.component";

export const TEACHER_CONTACT_MODAL_DATA: ModalInteface = {
  component: TeacherContactModalComponent,
  direction: 'rtl',
  width: '400px',
  data: {},
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