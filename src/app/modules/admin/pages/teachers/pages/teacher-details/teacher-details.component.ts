import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs';
import { AdminService } from 'src/app/modules/admin/store/service';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
})
export class TeacherDetailsComponent {
  data!: any;
  isLoading = false;
  constructor(
    private adminService: AdminService,
    public route: ActivatedRoute
  ) {}

  ngAfterViewInit() {
    this.adminService
      .getTeacher(this.route.snapshot.params['id'])
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((res: any) => {
        console.log(res);

        this.data = res;
      });
  }
}
