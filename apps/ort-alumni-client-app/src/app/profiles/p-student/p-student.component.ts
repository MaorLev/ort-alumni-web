import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-p-student',
  templateUrl: './p-student.component.html',
  styleUrls: ['./p-student.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PStudentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
