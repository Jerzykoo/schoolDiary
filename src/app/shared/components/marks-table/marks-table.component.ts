import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-marks-table',
  templateUrl: './marks-table.component.html',
})
export class MarksTableComponent {
  @Input() data!: any[];

  displayedColumns: string[] = ['subName', 'marksObtained'];

  constructor(public route: ActivatedRoute) {}
}
