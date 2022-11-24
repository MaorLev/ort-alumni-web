import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditStudentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
