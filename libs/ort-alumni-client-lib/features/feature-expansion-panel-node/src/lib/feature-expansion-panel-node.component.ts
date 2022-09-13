import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  HostListener
} from '@angular/core';
import { Router } from '@angular/router';
import { FilesNodeInterface } from './files-node.interface';
@Component({
  selector: 'ort-feature-expansion-panel-node',
  templateUrl: './feature-expansion-panel-node.component.html',
  styleUrls: ['./feature-expansion-panel-node.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureExpansionPanelNodeComponent implements OnInit {
  @Input() dateSource: FilesNodeInterface[];
  @Output() routeClicked: EventEmitter<void>;
  gridList: Array<FilesNodeInterface[]>;
  isactive: string;
  currActives: Map<number, string>;
  prevActive: number;
  algoFlag: boolean;
  backupList: Array<FilesNodeInterface[]>;
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

  hasChildren = (subList: FilesNodeInterface) => {
    return !!subList.children && subList.children.length > 0;
  };

  startNode() {
    this.gridList = new Array<FilesNodeInterface[]>();
    this.backupList = new Array<FilesNodeInterface[]>();
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

  responsiveOpen(val: FilesNodeInterface[]) {
    this.backupList.push(this.gridList.pop() as FilesNodeInterface[]);
    this.gridList.push(val);
  }
  @HostListener('window:resize')
  determineAlgoBySize() {

    const windowSize = window.innerWidth;

    if (windowSize <= 925 && !(this.algoFlag)) {
      this.startNode();
      this.algoFlag = true;
    }
    else if (windowSize > 925 && this.algoFlag){
      this.startNode();
      this.algoFlag = false;
    }
  }
  onBack() {
    this.gridList.pop();
    this.gridList.push(this.backupList.pop() as FilesNodeInterface []);
  }
}
