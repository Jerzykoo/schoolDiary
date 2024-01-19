import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/modules/admin/store/service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
})
export class StudentDetailsComponent {
  student!: any;
  isLoading = false;
  constructor(
    private adminService: AdminService,
    public route: ActivatedRoute
  ) {}
  ngOnInit() {
    // this.isLoading = true;
    this.adminService
      .getStudent(this.route.snapshot.params['id'])
      .subscribe((student: any) => {
        this.student = student;
        console.log(student);
      });
  }
}
