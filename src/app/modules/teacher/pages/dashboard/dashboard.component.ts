import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import {
  TEACH_CLASS_ID,
  TEACH_SUBJECT_ID,
} from 'src/app/core/services/token.service';
import { AdminService } from 'src/app/modules/admin/store/service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  subject!: any;
  classStudents!: any;

  constructor(
    private adminService: AdminService,
    public route: ActivatedRoute
  ) {}
  ngOnInit() {
    forkJoin(
      this.adminService.getSubject(
        localStorage.getItem(TEACH_SUBJECT_ID) as string
      ),
      this.adminService.getClassStudents(
        localStorage.getItem(TEACH_CLASS_ID) as string
      )
    ).subscribe(([subject, classStudents]) => {
      this.subject = subject;
      this.classStudents = classStudents;
    });
  }
}
