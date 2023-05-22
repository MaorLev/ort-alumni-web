import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  HostListener,
} from '@angular/core';
import { Router } from '@angular/router';
import { FilesTreeNodeInterface } from './files-tree-node.interface';
@Component({
  selector: 'ort-feature-expansion-tree',
  templateUrl: './feature-expansion-tree.component.html',
  styleUrls: ['./feature-expansion-tree.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureExpansionTreeComponent implements OnInit {
  @Input() dateSource: FilesTreeNodeInterface[];
  @Output() routeClicked: EventEmitter<void>;
  gridList: Array<FilesTreeNodeInterface[]>;
  isactive: string;
  currActives: Map<number, string>;
  prevActive: number;
  algoFlag: boolean;
  backupList: Array<FilesTreeNodeInterface[]>;
  get isActive() {
    return this.isactive;
  }
  set isActive(value: string) {
    this.isactive = value;
  }

  constructor(private router: Router) {
    this.routeClicked = new EventEmitter<void>();
    this.isactive = '';
    this.currActives = new Map<number, string>();
  }

  ngOnInit(): void {
    this.algoFlag = window.innerWidth > 925;
    this.determineAlgoBySize();
  }

  hasChildren = (subList: FilesTreeNodeInterface) => {
    return !!subList.children && subList.children.length > 0;
  };

  startNode() {
    this.gridList = new Array<FilesTreeNodeInterface[]>();
    this.backupList = new Array<FilesTreeNodeInterface[]>();
    this.gridList.push(this.dateSource);
  }
  open(val: FilesTreeNodeInterface[], newLevel: number) {
    const currLevel = this.gridList.length;
    if (newLevel < currLevel) {
      const countToRemove = Math.abs(newLevel - currLevel);
      for (let i = 0; i < countToRemove; i++) this.gridList.pop();
    }
    this.gridList.push(val);
  }
  routeTo(route: string | undefined) {
    if (route) {
      this.router.navigateByUrl(route,{skipLocationChange:false});
      this.routeClicked.emit();
    }
  }
  onActive(index: number) {
    if (this.currActives.has(index)) return;
    this.currActives.set(index, 'active');
    this.currActives.delete(this.prevActive);
    this.prevActive = index;
  }

  responsiveOpen(val: FilesTreeNodeInterface[]) {
    this.backupList.push(this.gridList.pop() as FilesTreeNodeInterface[]);
    this.gridList.push(val);
  }
  @HostListener('window:resize')
  determineAlgoBySize() {
    const windowSize = window.innerWidth;

    if (windowSize <= 925 && !this.algoFlag) {
      this.startNode();
      this.algoFlag = true;
    } else if (windowSize > 925 && this.algoFlag) {
      this.startNode();
      this.algoFlag = false;
    }
  }
  onBack() {
    this.gridList.pop();
    this.gridList.push(this.backupList.pop() as FilesTreeNodeInterface[]);
  }
}
