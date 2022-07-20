import {
  Directive,
  Output,
  Input,
  EventEmitter,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[ortDnd]',
})
export class DndDirective {
  @HostBinding('class.fileover') fileOver: boolean;
  @Input() isDisabled: boolean;
  @Output() fileDropped = new EventEmitter<any>();
  constructor() {
    this.isDisabled = false;
  }
  // Dragover listener
  @HostListener('dragover', ['$event']) onDragOver(evt: {
    preventDefault: () => void;
    stopPropagation: () => void;
  }) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = true;
  }

  // Dragleave listener
  @HostListener('dragleave', ['$event']) public onDragLeave(evt: {
    preventDefault: () => void;
    stopPropagation: () => void;
  }) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
  }

  // Drop listener
  @HostListener('drop', ['$event']) public ondrop(evt: {
    preventDefault: () => void;
    stopPropagation: () => void;
    dataTransfer: { files: any };
  }) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
    const files = evt.dataTransfer.files;
    if (files.length > 0 && this.isDisabled === false) {
      this.fileDropped.emit(files);
    }
  }
}
