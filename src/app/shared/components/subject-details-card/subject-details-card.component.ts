import { Component, Input } from '@angular/core';
import { finalize } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/modules/admin/store/service';

@Component({
  selector: 'app-subject-details-card',
  templateUrl: './subject-details-card.component.html',
})
export class SubjectDetailsCardComponent {
  @Input() public data!: any;
  @Input() public numberOfStudents!: number;

  constructor(
    private adminService: AdminService,
    public route: ActivatedRoute
  ) {}
}
