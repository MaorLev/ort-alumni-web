import {
  trigger,
  transition,
  style,
  animate,
  keyframes,
} from '@angular/animations';

export const inOutZoom = [
  trigger('inOutZoom', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate(
        '.8s ease-out',
        keyframes([
          style({ transform: 'scale(1.5)', offset: 0.7 }),
          style({ transform: 'scale(1)', offset: 1, opacity: 1 }),
        ])
      ),
    ]),
    transition(':leave', [
      style({ opacity: 1 }),
      animate('.4s ease-out', style({ opacity: 0 })),
    ]),
  ]),
];
