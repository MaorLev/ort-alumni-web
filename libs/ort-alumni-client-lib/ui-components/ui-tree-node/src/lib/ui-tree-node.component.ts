import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

import { Subscription } from 'rxjs';
import { FilesNodeInterface } from '../../../../features/feature-expansion-panel-node/src/lib/files-node.interface';
@Component({
  selector: 'ort-ui-tree-node',
  templateUrl: './ui-tree-node.component.html',
  styleUrls: ['./ui-tree-node.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTreeNodeComponent implements OnInit {
  @Input() data: FilesNodeInterface[];
  treeControl = new NestedTreeControl<FilesNodeInterface>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FilesNodeInterface>();

  ngOnInit(): void {
    this.dataSource.data = this.data;
  }
  hasChild = (_: number, node: FilesNodeInterface) => !!node.children && node.children.length > 0;
}
