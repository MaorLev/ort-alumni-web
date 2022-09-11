import { ComponentType } from "@angular/cdk/portal";
import { DialogPosition } from "@angular/material/dialog";

export interface ModalInteface {
  component:ComponentType<unknown>,
  direction: 'rtl' | 'ltr',
  width: string,
  height?:string;
  data?:any,
  panelClass?:string,
  byBackdrop?:boolean,
  backdropClass?:string,
  animation?:{
    to: 'aside' | 'top' | 'bottom' | 'left' | 'right';
    incomingOptions?: {
        keyframes?: Keyframe[];
        keyframeAnimationOptions: KeyframeAnimationOptions;
    };
    outgoingOptions?: {
        keyframes?: Keyframe[];
        keyframeAnimationOptions: KeyframeAnimationOptions;
    };
} | {
    to?: 'aside' | 'top' | 'bottom' | 'left' | 'right';
    incomingOptions?: {
        keyframes: Keyframe[];
        keyframeAnimationOptions: KeyframeAnimationOptions;
    };
    outgoingOptions?: {
        keyframes: Keyframe[];
        keyframeAnimationOptions: KeyframeAnimationOptions;
    };
},
  position?:DialogPosition & {
    rowStart?: string;
    rowEnd?: string;
};

}