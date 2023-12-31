import { Component } from '@angular/core';
import { finalize, forkJoin } from 'rxjs';
import { AdminService } from '../../../store/service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
})
export class StudentDetailsComponent {
  student!: any;
  subjects!: any[];
  isLoading = false;
  // displayedColumns: string[] = ['name', 'rollNum', 'sclassName', 'actions'];
  displayedColumns: string[] = [
    'subject',
    'presentNumber',
    'sessions',
    'attendencePercentage',
    'actions',
  ];
  finalData: any[] = [];
  constructor(
    private adminService: AdminService,
    public route: ActivatedRoute
  ) {}
  ngOnInit() {
    // this.isLoading = true;
    forkJoin(
      this.adminService.getStudent(this.route.snapshot.params['id']),
      this.adminService.getAllSubjects()
    ).subscribe(([student, subjects]) => {
      this.student = student;
      console.log(student);
      console.log(subjects);
      subjects.forEach((subject: any) => {
        const element: any = {
          subject: subject.subName,
          subjectId: subject._id,
          sessions: subject.sessions,
          isExpanded: false,
        };
        element.details = student.attendance.filter(
          (item: any) => item.subName._id === subject._id
        );
        element.presentNumber = [...element.details].filter(
          (item: any) => item.status === 'Present'
        )?.length;

        this.finalData.push(element);
      });
      this.finalData = [...this.finalData];

      console.log(this.finalData);
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
