import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
  OnDestroy,
} from '@angular/core';
import { NgDialogAnimationService } from 'ng-dialog-animation';
import { Observable, Subscription } from 'rxjs';
import { ModalInteface } from './modal.interface';

@Directive({
  selector: '[ortFeatureModal]',
})
export class FeatureModalDirective implements OnDestroy {
  subs = new Subscription();
  @Input('ortFeatureModal') modal_type: ModalInteface;
  @Input() dynamic_data: { mailforstudy: string, phone: string };
  @Output() afterClosedOutput = new EventEmitter<any>();
  private _value$ = new Observable<string>();
  constructor(public dialog: NgDialogAnimationService) {}

  @HostListener('click')
  openDialog() {
    const dialogRef = this.dialog.open(this.modal_type.component, {
      width: this.modal_type.width,
      height: this.modal_type?.height,
      direction: this.modal_type.direction,
      hasBackdrop: this.modal_type?.byBackdrop || true,
      backdropClass: this.modal_type?.backdropClass,
      panelClass:
        'bgmp ' + this.modal_type?.panelClass ? this.modal_type.panelClass : '',
      data: this.dynamic_data
        ? {
            constant_data: this.modal_type.data,
            dynamic_data: this.dynamic_data,
          }
        : this.modal_type.data,
      animation: this.modal_type.animation || undefined,
      // animation: this.modal_type.animation || { to: "aside" },
      position: this.modal_type.position || undefined,
      // position: this.modal_type.position || {rowStart:'50rem' }
    });

    this._value$ = dialogRef.afterClosed();
    this.subs = this._value$.subscribe((val) => {
      this.afterClosedOutput.emit(val);
    });
    // this.afterClosedOutput$.emit(dialogRef.afterClosed())
  }
  ngOnDestroy(): void {
    if (this.subs) this.subs.unsubscribe();
  }
}
