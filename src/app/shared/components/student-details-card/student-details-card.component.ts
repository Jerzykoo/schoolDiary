import { Component, Input } from '@angular/core';
import { finalize } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/modules/admin/store/service';

@Component({
  selector: 'app-student-details-card',
  templateUrl: './student-details-card.component.html',
})
export class StudentDetailsCardComponent {
  @Input() public data!: any;
  @Input() public subjects!: any;
  constructor(
    private adminService: AdminService,
    public route: ActivatedRoute
  ) {}
}
