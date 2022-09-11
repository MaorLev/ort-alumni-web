import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  DoCheck
} from '@angular/core';
import { Router } from '@angular/router';
import { FilesNodeInterface } from './files-node.interface';
@Component({
  selector: 'ort-feature-expansion-panel-node',
  templateUrl: './feature-expansion-panel-node.component.html',
  styleUrls: ['./feature-expansion-panel-node.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureExpansionPanelNodeComponent implements OnInit, DoCheck {
  @Input() dateSource: FilesNodeInterface[];
  @Output() routeClicked: EventEmitter<void>;
  gridList: Array<FilesNodeInterface[]>;
  isactive: string;
  currActives: Map<number, string>;
  prevActive: number;
  get isActive() {
    return this.isactive;
  }
  set isActive(value: string) {
    this.isactive = value;
  }

  constructor(private router: Router) {
    this.gridList = new Array<FilesNodeInterface[]>();
    this.routeClicked = new EventEmitter<void>();
    this.isactive = '';
    this.currActives = new Map<number, string>();
  }
  ngDoCheck(): void {
    this.isActive = '';
  }

  hasChildren = (subList: FilesNodeInterface) => {
    return !!subList.children && subList.children.length > 0;
  };

  ngOnInit(): void {
    this.gridList.push(this.dateSource);
  }

  open(val: FilesNodeInterface[], newLevel: number) {
    const currLevel = this.gridList.length;
    if (newLevel < currLevel) {
      const countToRemove = Math.abs(newLevel - currLevel);
      for (let i = 0; i < countToRemove; i++) this.gridList.pop();
    }
    this.gridList.push(val);
  }
  routeTo(route: string | undefined) {
    if (route) {
      this.router.navigateByUrl(route);
      this.routeClicked.emit();
    }
  }
  onActive(index: number) {
    if (this.currActives.has(index)) return;
    this.currActives.set(index, 'active');
    this.currActives.delete(this.prevActive);
    this.prevActive = index;
  }
}
