import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { AdminService } from 'src/app/modules/admin/store/service';

@Component({
  selector: 'app-subject-table',
  templateUrl: './subject-table.component.html',
})
export class SubjectTableComponent {
  @Input() data!: any[];
  @Input() displayedColumns!: string[];
  @Output() removed: EventEmitter<any> = new EventEmitter();
  constructor(
    private adminService: AdminService,
    private toast: HotToastService
  ) {}
  removeSubject(id: any) {
    this.removed.emit(id);
  }
}
