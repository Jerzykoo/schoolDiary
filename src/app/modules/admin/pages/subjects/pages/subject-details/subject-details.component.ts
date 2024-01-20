import { Component } from '@angular/core';
import { finalize, forkJoin } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/modules/admin/store/service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
})
export class SubjectDetailsComponent {
  students: any[] = [];
  subject!: any;
  isLoading = false;
  // displayedColumns: string[] = ['name', 'rollNum', 'sclassName', 'actions'];
  displayedColumns: string[] = ['rollNum', 'name', 'actions'];
  finalData: any[] = [];
  constructor(
    private adminService: AdminService,
    public route: ActivatedRoute,
    private toast: HotToastService
  ) {}
  ngOnInit() {
    // this.isLoading = true;
    forkJoin(
      this.adminService.getStudents(),
      this.adminService.getSubject(this.route.snapshot.params['id'])
    ).subscribe(([students, subject]) => {
      if (students?.message) {
        // this.toast.warning(students?.message);
      } else {
        this.students = students as any;
      }

      this.subject = subject;
    });

    // this.adminService
    //   .getStudent(this.route.snapshot.params['id'])
    //   .pipe(finalize(() => (this.isLoading = false)))
    //   .subscribe((res: any) => {
    //     console.log(res);
    //     this.student = res;
    //   });

    // this.adminService
    //   .getAllSubjects()
    //   .pipe(finalize(() => (this.isLoading = false)))
    //   .subscribe((res: any) => {
    //     console.log(res);
    //     this.subjects = res;
    //   });
  }
}
