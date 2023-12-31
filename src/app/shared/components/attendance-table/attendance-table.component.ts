import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-attendance-table',
  templateUrl: './attendance-table.component.html',
})
export class AttendanceTableComponent {
  @Input() data!: any[];
  details: any = null;
  displayedColumns: string[] = [
    'subject',
    'presentNumber',
    'sessions',
    'attendencePercentage',
    'actions',
  ];

  displayedColumnsAttendenceDetailsScreen: string[] = ['date', 'status'];

  constructor(public route: ActivatedRoute) {}
}
