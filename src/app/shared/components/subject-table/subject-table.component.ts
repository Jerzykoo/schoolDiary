import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subject-table',
  templateUrl: './subject-table.component.html',
})
export class SubjectTableComponent {
  @Input() data!: any[];
  @Input() displayedColumns!: string[];
}
